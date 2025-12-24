import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">Клиника</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">Специалисты</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (800) 123-45-67
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <Icon name="Shield" size={18} />
                <span>100% конфиденциально</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-secondary leading-tight">
                Помощь, которой можно доверять
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная помощь в сфере психиатрии, наркологии и психотерапии. 
                Анонимность гарантирована. Работаем круглосуточно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться на консультацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in animation-delay-200">
              <img 
                src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/a9dbec15-e632-4d2b-9f7a-ee9c735f9b35.jpg"
                alt="Спокойная атмосфера"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши направления</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к лечению. Каждый пациент получает индивидуальную программу терапии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="Brain" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Психиатрия</h3>
                <p className="text-muted-foreground">
                  Диагностика и лечение психических расстройств. Современные методики и индивидуальный подход.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Депрессия и тревожные расстройства</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Биполярное расстройство</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Психотические состояния</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in animation-delay-200">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Icon name="HeartPulse" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Наркология</h3>
                <p className="text-muted-foreground">
                  Лечение зависимостей с гарантией полной анонимности. Комплексная программа реабилитации.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-1" />
                    <span>Алкогольная зависимость</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-1" />
                    <span>Наркотическая зависимость</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-accent mt-1" />
                    <span>Реабилитация и поддержка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in animation-delay-400">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon name="MessageCircleHeart" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Психотерапия</h3>
                <p className="text-muted-foreground">
                  Работа с психологическими проблемами, травмами и кризисными состояниями.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Индивидуальная терапия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Семейная терапия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Групповые сессии</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl font-bold text-secondary">Почему выбирают нас</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Полная конфиденциальность</h3>
                    <p className="text-muted-foreground">
                      Гарантируем 100% анонимность. Никакая информация не передаётся третьим лицам. 
                      Все данные защищены.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Опытные специалисты</h3>
                    <p className="text-muted-foreground">
                      Врачи высшей категории с опытом работы более 15 лет. Регулярное повышение квалификации.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Круглосуточная поддержка</h3>
                    <p className="text-muted-foreground">
                      Работаем 24/7. Экстренная помощь в любое время. Выезд специалиста на дом.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary mb-2">Комплексный подход</h3>
                    <p className="text-muted-foreground">
                      Работаем с пациентом и его близкими. Индивидуальные программы лечения и реабилитации.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in animation-delay-200">
              <img 
                src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/c04d743e-78d0-4159-8d2a-91b10326c3f6.jpg"
                alt="Поддержка и забота"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши специалисты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Команда профессионалов с многолетним опытом работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Иванова Елена Михайловна', role: 'Врач-психиатр высшей категории', exp: '20 лет опыта' },
              { name: 'Петров Андрей Сергеевич', role: 'Врач-нарколог, к.м.н.', exp: '15 лет опыта' },
              { name: 'Сидорова Мария Александровна', role: 'Психотерапевт, семейный консультант', exp: '18 лет опыта' }
            ].map((doctor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/ffe44746-9680-4a94-8938-0156760911ff.jpg"
                    alt={doctor.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-secondary">{doctor.name}</h3>
                  <p className="text-muted-foreground">{doctor.role}</p>
                  <p className="text-sm text-primary font-semibold">{doctor.exp}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и понятный процесс от первого обращения до выздоровления
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Phone', title: 'Первый контакт', desc: 'Позвоните или оставьте заявку. Анонимная консультация бесплатно' },
              { icon: 'Stethoscope', title: 'Диагностика', desc: 'Комплексное обследование и точная постановка диагноза' },
              { icon: 'FileText', title: 'План лечения', desc: 'Индивидуальная программа с учётом особенностей пациента' },
              { icon: 'Heart', title: 'Реабилитация', desc: 'Поддержка на всех этапах восстановления и после' }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative">
                  <Icon name={step.icon as any} size={32} className="text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4">Запишитесь на консультацию</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <Card className="border-2 animate-scale-in animation-delay-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Ваше имя
                  </label>
                  <Input 
                    placeholder="Как к вам обращаться?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Телефон
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">
                    Сообщение (необязательно)
                  </label>
                  <Textarea 
                    placeholder="Расскажите о вашей ситуации..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="text-lg"
                  />
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3">
                  <Icon name="Lock" className="text-primary flex-shrink-0" size={20} />
                  <p className="text-sm text-muted-foreground">
                    Ваши данные защищены и не будут переданы третьим лицам. 
                    Гарантируем полную конфиденциальность.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center space-y-4 animate-fade-in animation-delay-400">
            <p className="text-muted-foreground">Или позвоните нам прямо сейчас:</p>
            <a href="tel:+78001234567" className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors block">
              +7 (800) 123-45-67
            </a>
            <p className="text-sm text-muted-foreground">Круглосуточно, без выходных</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={32} />
                <span className="text-2xl font-bold">Клиника</span>
              </div>
              <p className="text-white/70">
                Профессиональная помощь в области психиатрии, наркологии и психотерапии
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">Психиатрия</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Наркология</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Психотерапия</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О клинике</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Специалисты</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@clinic.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>© 2024 Клиника. Все права защищены. Имеются противопоказания, необходима консультация специалиста.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
