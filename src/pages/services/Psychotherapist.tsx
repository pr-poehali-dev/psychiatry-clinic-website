import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Psychotherapist = () => {
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
                <span className="text-primary font-semibold">Конфиденциально и бережно</span>
              </div>
              <h1 className="text-5xl font-bold text-secondary mb-6">Консультация психотерапевта</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Помощь в преодолении жизненных трудностей, работа с эмоциями, отношениями и личностным ростом.
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
                  alt="Консультация психотерапевта"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">С чем помогает психотерапевт</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Heart', title: 'Отношения', desc: 'Сложности в паре, семейные конфликты, проблемы коммуникации' },
              { icon: 'Sparkles', title: 'Самооценка', desc: 'Неуверенность, самокритика, поиск себя' },
              { icon: 'CloudRain', title: 'Эмоции', desc: 'Тревога, страхи, подавленность, стресс' },
              { icon: 'Users', title: 'Социальная адаптация', desc: 'Трудности в общении, одиночество' },
              { icon: 'Bomb', title: 'Травмы', desc: 'Последствия тяжёлых событий, утраты' },
              { icon: 'Target', title: 'Жизненные кризисы', desc: 'Потеря смысла, выгорание, выбор пути' }
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
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Форматы работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Индивидуальная терапия</h3>
                <p className="text-muted-foreground mb-6">
                  Один на один с терапевтом. Личное пространство для работы над вашими запросами.
                </p>
                <p className="text-3xl font-bold text-primary mb-4">3 500 ₽</p>
                <p className="text-sm text-muted-foreground mb-6">за сессию 60 минут</p>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full mb-4">Популярное</div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Парная терапия</h3>
                <p className="text-muted-foreground mb-6">
                  Для пар, переживающих кризис или желающих улучшить отношения.
                </p>
                <p className="text-3xl font-bold text-primary mb-4">5 000 ₽</p>
                <p className="text-sm text-muted-foreground mb-6">за сессию 90 минут</p>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Семейная терапия</h3>
                <p className="text-muted-foreground mb-6">
                  Работа со всеми членами семьи для решения семейных проблем.
                </p>
                <p className="text-3xl font-bold text-primary mb-4">6 000 ₽</p>
                <p className="text-sm text-muted-foreground mb-6">за сессию 90 минут</p>
                <Button className="w-full" variant="outline">Записаться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Методы психотерапии</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">Когнитивно-поведенческая терапия (КПТ)</h3>
                <p className="text-muted-foreground">
                  Научно доказанный метод работы с тревогой, депрессией, паническими атаками. 
                  Помогает изменить негативные мысли и поведение.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">Гештальт-терапия</h3>
                <p className="text-muted-foreground">
                  Работа с эмоциями и незавершёнными ситуациями. Помогает осознать свои чувства 
                  и научиться проживать их здоровым способом.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">Системная семейная терапия</h3>
                <p className="text-muted-foreground">
                  Рассматривает проблемы в контексте семейной системы. Эффективна для работы 
                  с конфликтами и улучшения семейных отношений.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">Схема-терапия</h3>
                <p className="text-muted-foreground">
                  Помогает изменить глубинные убеждения и паттерны, сформированные в детстве. 
                  Эффективна при работе с личностными проблемами.
                </p>
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
                    alt="Сидорова Мария Александровна"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-2">Сидорова Мария Александровна</h3>
                  <p className="text-primary font-semibold mb-4">Психотерапевт, семейный консультант, 18 лет опыта</p>
                  <p className="text-muted-foreground mb-6">
                    Опытный психотерапевт с экспертизой в семейной терапии и работе с парами. 
                    Создаёт безопасное пространство для глубокой работы с эмоциями.
                  </p>
                  <Link to="/doctors/sidorova-maria">
                    <Button variant="outline">
                      Подробнее о специалисте
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
                    placeholder="Расскажите о вашем запросе"
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

export default Psychotherapist;
