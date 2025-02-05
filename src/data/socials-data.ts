import FacebookIcon from '@/components/assets/FacebookIcon.astro'
import InstagramIcon from '@/components/assets/InstagramIcon.astro'
import PhoneIcon from '@/components/assets/PhoneIcon.astro'
import WhatsappIcon from '@/components/assets/WhatsappIcon.astro'
import YoutubeIcon from '@/components/assets/YoutubeIcon.astro'

export const socialLinks = [
  { icon: PhoneIcon, bg: '#ea4125', label: 'Teléfono', href: 'tel:+1234567890' },
  { icon: WhatsappIcon, bg: 'green', label: 'WhatsApp', href: 'https://wa.me/638490870' },
  { icon: InstagramIcon, bg: undefined, label: 'Instagram', href: 'https://instagram.com/yourgympage' },
  { icon: FacebookIcon, bg: '#0077b5', label: 'Facebook', href: 'https://facebook.com/yourgympage' },
  { icon: YoutubeIcon, bg: '#dc2626', label: 'YouTube', href: 'https://youtube.com/yourgymchannel' },
]
