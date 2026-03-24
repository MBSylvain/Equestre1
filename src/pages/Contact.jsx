import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(5, 'Le sujet doit être plus explicite'),
  message: z.string().min(10, 'Le message est trop court')
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Message envoyé avec succès ! Nous vous répondrons bientôt.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    reset();
  };

  return (
    <div className="pt-24 pb-20 bg-nature-sand/5">
      <Helmet>
        <title>Contactez-nous - Centre Équestre</title>
        <meta name="description" content="Une question, une réservation ou une demande de devis ? Contactez l'équipe du Centre Équestre par téléphone, email ou formulaire." />
      </Helmet>
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display text-nature-forest mb-4">Contactez-nous</h1>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Une question sur nos cours, nos pensions ou une réservation ? 
            L'équipe du Centre Équestre est à votre écoute.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <AnimatedSection delay={0.1} className="space-y-12">
            <div className="bg-white p-8 rounded-3xl shadow-soft border border-nature-sand/30">
              <h2 className="text-2xl font-display text-nature-forest mb-8">Informations Pratiques</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-nature-forest">Notre Adresse</h3>
                    <p className="text-neutral-dark">123 Chemin des Écuries, 75000 Val-de-Marne</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-nature-forest">Téléphone</h3>
                    <p className="text-neutral-dark">01 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-nature-forest">Email</h3>
                    <p className="text-neutral-dark">contact@centre-equestre.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl text-primary-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-nature-forest">Horaires d'ouverture</h3>
                    <p className="text-neutral-dark">Lun - Sam : 08h00 - 20h00</p>
                    <p className="text-neutral-dark">Dimanche : 09h00 - 18h00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-3xl overflow-hidden shadow-soft grayscale hover:grayscale-0 transition-all duration-500 border border-nature-sand/30">
              {/* Placeholder for Map */}
              <div className="w-full h-full bg-nature-sand flex items-center justify-center text-secondary-bridle italic">
                Carte interactive (Google Maps)
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2} className="bg-white p-8 md:p-12 rounded-3xl shadow-soft border border-nature-sand/30">
            <h2 className="text-2xl font-display text-nature-forest mb-8">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-nature-forest ml-1">Nom complet</label>
                  <input
                    {...register('name')}
                    placeholder="Votre nom"
                    className={`px-4 py-2.5 rounded-xl border-2 ${errors.name ? 'border-red-400' : 'border-nature-sand'} focus:border-primary-500 focus:outline-none transition-all shadow-sm`}
                  />
                  {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name.message}</span>}
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-nature-forest ml-1">Email</label>
                  <input
                    {...register('email')}
                    placeholder="votre@email.com"
                    className={`px-4 py-2.5 rounded-xl border-2 ${errors.email ? 'border-red-400' : 'border-nature-sand'} focus:border-primary-500 focus:outline-none transition-all shadow-sm`}
                  />
                  {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-nature-forest ml-1">Sujet</label>
                <input
                  {...register('subject')}
                  placeholder="De quoi souhaitez-vous discuter ?"
                  className={`px-4 py-2.5 rounded-xl border-2 ${errors.subject ? 'border-red-400' : 'border-nature-sand'} focus:border-primary-500 focus:outline-none transition-all shadow-sm`}
                />
                {errors.subject && <span className="text-xs text-red-500 ml-1">{errors.subject.message}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-nature-forest ml-1">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Votre message ici..."
                  className={`px-4 py-3 rounded-xl border-2 ${errors.message ? 'border-red-400' : 'border-nature-sand'} focus:border-primary-500 focus:outline-none transition-all shadow-sm resize-none`}
                />
                {errors.message && <span className="text-xs text-red-500 ml-1">{errors.message.message}</span>}
              </div>

              <Button type="submit" className="w-full" size="lg">
                Envoyer le message
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
