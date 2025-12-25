import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (800) 123-45-67
          </Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-6 mt-8">
                <a 
                  href="#services" 
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#about" 
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О нас
                </a>
                <a 
                  href="#team" 
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Специалисты
                </a>
                <a 
                  href="#reviews" 
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Отзывы
                </a>
                <a 
                  href="#contact" 
                  className="text-lg text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <Button size="lg" className="mt-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (800) 123-45-67
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
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
            <Link to="/services/psychiatrist">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in cursor-pointer h-full">
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
                  <div className="pt-4">
                    <span className="text-primary font-semibold flex items-center gap-2">
                      Подробнее <Icon name="ArrowRight" size={16} />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/narcologist">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in animation-delay-200 cursor-pointer h-full">
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
                  <div className="pt-4">
                    <span className="text-primary font-semibold flex items-center gap-2">
                      Подробнее <Icon name="ArrowRight" size={16} />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/psychotherapist">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in animation-delay-400 cursor-pointer h-full">
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
                  <div className="pt-4">
                    <span className="text-primary font-semibold flex items-center gap-2">
                      Подробнее <Icon name="ArrowRight" size={16} />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <Link to="/services/alcohol-treatment">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Wine" size={28} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-secondary mb-1">Лечение алкогольной зависимости</h4>
                    <p className="text-sm text-muted-foreground">Комплексная программа от детоксикации до реабилитации</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-primary flex-shrink-0" />
                </CardContent>
              </Card>
            </Link>

            <Link to="/services/home-visit">
              <Card className="border-2 border-red-200 bg-red-50/50 hover:border-red-300 hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Ambulance" size={28} className="text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-secondary mb-1">Вызов врача на дом</h4>
                    <p className="text-sm text-muted-foreground">Экстренная помощь 24/7. Приезд в течение часа</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-red-600 flex-shrink-0" />
                </CardContent>
              </Card>
            </Link>
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
              { name: 'Иванова Елена Михайловна', role: 'Врач-психиатр высшей категории', exp: '20 лет опыта', link: '/doctors/ivanova-elena' },
              { name: 'Петров Андрей Сергеевич', role: 'Врач-нарколог, к.м.н.', exp: '15 лет опыта', link: '/doctors/petrov-andrey' },
              { name: 'Сидорова Мария Александровна', role: 'Психотерапевт, семейный консультант', exp: '18 лет опыта', link: '/doctors/sidorova-maria' }
            ].map((doctor, index) => (
              <Link key={index} to={doctor.link}>
                <Card className="overflow-hidden hover:shadow-xl transition-all animate-scale-in cursor-pointer h-full" style={{ animationDelay: `${index * 200}ms` }}>
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
                    <div className="pt-2">
                      <span className="text-primary font-semibold flex items-center gap-1 text-sm">
                        Подробнее <Icon name="ArrowRight" size={14} />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4">Лицензии и сертификаты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Вся деятельность клиники лицензирована и соответствует государственным стандартам
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'FileCheck', title: 'Лицензия Минздрава', number: 'ЛО-77-01-020123' },
              { icon: 'Award', title: 'Сертификат ISO 9001', number: 'Система качества' },
              { icon: 'ShieldCheck', title: 'Аккредитация', number: 'Государственная' },
              { icon: 'Medal', title: 'Премия качества', number: '2023 год' }
            ].map((cert, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                    <Icon name={cert.icon as any} size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-1">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.number}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Все специалисты имеют действующие сертификаты и регулярно проходят повышение квалификации</p>
            <Button variant="outline" size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать копии документов
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы пациентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы ценим доверие наших пациентов. Все отзывы публикуются анонимно
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                initials: 'А.М.',
                text: 'Обратилась с тяжёлой депрессией. Думала, что выхода нет. Врачи клиники помогли мне вернуться к жизни. Спасибо за профессионализм и человечность.',
                service: 'Психиатрия',
                rating: 5,
                date: 'Ноябрь 2024'
              },
              {
                initials: 'С.К.',
                text: 'Анонимность — это главное, что меня волновало. В клинике действительно гарантируют полную конфиденциальность. Прошёл курс лечения, жизнь изменилась к лучшему.',
                service: 'Наркология',
                rating: 5,
                date: 'Октябрь 2024'
              },
              {
                initials: 'М.В.',
                text: 'Семейная терапия спасла наш брак. Психотерапевт помогла нам найти общий язык и решить давние проблемы. Рекомендую всем, кто столкнулся с кризисом в отношениях.',
                service: 'Психотерапия',
                rating: 5,
                date: 'Декабрь 2024'
              }
            ].map((review, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="font-bold text-primary">{review.initials}</span>
                      </div>
                      <div>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">"{review.text}"</p>
                  
                  <div className="pt-4 border-t border-border">
                    <span className="text-sm font-semibold text-primary">{review.service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-primary/5 border border-primary/20 rounded-xl p-8 animate-fade-in animation-delay-400">
            <Icon name="Quote" size={40} className="text-primary mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              За 15 лет работы мы помогли более 10 000 пациентов вернуться к полноценной жизни. 
              Каждая история выздоровления уникальна, но все они начинаются с первого шага — обращения за помощью.
            </p>
            <p className="text-sm text-muted-foreground">Главный врач клиники, Иванова Е.М.</p>
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
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
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