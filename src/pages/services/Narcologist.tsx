import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Narcologist = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-secondary">Клиника</span>
          </Link>
          <Link to="/">
            <Button variant="ghost">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              На главную
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-semibold">Анонимно и конфиденциально</span>
              </div>
              <h1 className="text-5xl font-bold text-secondary mb-6">Консультация нарколога</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональная помощь в лечении зависимостей. Индивидуальный подход, современные методы, гарантия анонимности.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Phone" size={20} />
                  +7 (800) 123-45-67
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Calendar" size={20} />
                  Записаться онлайн
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/ffe44746-9680-4a94-8938-0156760911ff.jpg"
                  alt="Консультация нарколога"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">С чем мы работаем</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Wine', title: 'Алкогольная зависимость', desc: 'Диагностика, детоксикация, кодирование, реабилитация' },
              { icon: 'Pill', title: 'Наркозависимость', desc: 'Лечение зависимости от психоактивных веществ' },
              { icon: 'Cigarette', title: 'Никотиновая зависимость', desc: 'Программы отказа от курения' },
              { icon: 'AlertCircle', title: 'Абстинентный синдром', desc: 'Купирование похмельного и ломки' },
              { icon: 'Activity', title: 'Запои', desc: 'Вывод из запоя на дому и в стационаре' },
              { icon: 'ShieldAlert', title: 'Созависимость', desc: 'Помощь родственникам зависимых' }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Как проходит консультация</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Звонок', desc: 'Позвоните или оставьте заявку. Все конфиденциально' },
              { step: 2, title: 'Беседа', desc: 'Врач выяснит детали, ответит на вопросы' },
              { step: 3, title: 'Обследование', desc: 'Осмотр, анализы, постановка диагноза' },
              { step: 4, title: 'План лечения', desc: 'Индивидуальная программа восстановления' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Стоимость услуг</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Первичная консультация</h3>
                <p className="text-4xl font-bold text-primary mb-6">3 500 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Беседа с врачом 60 мин</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Осмотр и диагностика</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Рекомендации</span>
                  </li>
                </ul>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full mb-4">Популярное</div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Детоксикация</h3>
                <p className="text-4xl font-bold text-primary mb-6">от 8 000 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Капельница на дому</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Очищение организма</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Приезд в течение часа</span>
                  </li>
                </ul>
                <Button className="w-full">Вызвать врача</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Программа реабилитации</h3>
                <p className="text-4xl font-bold text-primary mb-6">от 50 000 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Индивидуальный план</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Психотерапия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Поддержка после лечения</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctor */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Наш специалист</h2>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/ffe44746-9680-4a94-8938-0156760911ff.jpg"
                    alt="Петров Андрей Сергеевич"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-2">Петров Андрей Сергеевич</h3>
                  <p className="text-primary font-semibold mb-4">Врач-нарколог, к.м.н., 15 лет опыта</p>
                  <p className="text-muted-foreground mb-6">
                    Признанный эксперт в области наркологии. Автор более 20 научных публикаций. 
                    Специализируется на комплексном подходе к лечению зависимостей.
                  </p>
                  <Link to="/doctors/petrov-andrey">
                    <Button variant="outline">
                      Подробнее о враче
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Записаться на консультацию</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку, и мы перезвоним в течение 15 минут</p>
          </div>
          <Card className="border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                  <Textarea 
                    placeholder="Опишите вашу ситуацию"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности. Все данные защищены.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Narcologist;
