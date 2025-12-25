import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Psychiatrist = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-semibold">Анонимно без постановки на учёт</span>
              </div>
              <h1 className="text-5xl font-bold text-secondary mb-6">Консультация психиатра</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Диагностика и лечение психических расстройств. Современные методы терапии, индивидуальный подход к каждому пациенту.
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
                  alt="Консультация психиатра"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">С какими состояниями мы работаем</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'CloudRain', title: 'Депрессия', desc: 'Диагностика и комплексное лечение депрессивных расстройств' },
              { icon: 'AlertTriangle', title: 'Тревожные расстройства', desc: 'Панические атаки, фобии, генерализованная тревога' },
              { icon: 'Moon', title: 'Бессонница', desc: 'Нарушения сна, инсомния, расстройства циркадных ритмов' },
              { icon: 'Zap', title: 'Биполярное расстройство', desc: 'Стабилизация настроения, профилактика обострений' },
              { icon: 'Brain', title: 'Психозы', desc: 'Шизофрения, бредовые и галлюцинаторные расстройства' },
              { icon: 'Frown', title: 'Расстройства личности', desc: 'Диагностика и долгосрочная терапия' }
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

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Как проходит приём</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Запись', desc: 'Выберите удобное время. Анонимность гарантирована' },
              { step: 2, title: 'Беседа', desc: 'Врач внимательно выслушает и задаст вопросы' },
              { step: 3, title: 'Диагностика', desc: 'Клиническое обследование, тесты, анализы' },
              { step: 4, title: 'Лечение', desc: 'План терапии с учётом вашей ситуации' }
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Стоимость консультаций</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Первичный приём</h3>
                <p className="text-4xl font-bold text-primary mb-6">4 000 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Консультация 60-90 минут</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Постановка диагноза</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>План лечения</span>
                  </li>
                </ul>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full mb-4">Рекомендуем</div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Повторный приём</h3>
                <p className="text-4xl font-bold text-primary mb-6">3 000 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Контроль состояния</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Коррекция терапии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Выписка рецептов</span>
                  </li>
                </ul>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Домашний визит</h3>
                <p className="text-4xl font-bold text-primary mb-6">8 000 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Приезд врача на дом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Полный осмотр</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Экстренная помощь</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Вызвать врача</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Наш специалист</h2>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/ffe44746-9680-4a94-8938-0156760911ff.jpg"
                    alt="Иванова Елена Михайловна"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-2">Иванова Елена Михайловна</h3>
                  <p className="text-primary font-semibold mb-4">Врач-психиатр высшей категории, 20 лет опыта</p>
                  <p className="text-muted-foreground mb-6">
                    За 20 лет практики помогла более 3000 пациентов. Специализируется на лечении депрессии, 
                    тревожных и психотических расстройств.
                  </p>
                  <Link to="/doctors/ivanova-elena">
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
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Psychiatrist;
