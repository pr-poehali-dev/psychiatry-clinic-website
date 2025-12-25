import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const AlcoholTreatment = () => {
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
                <span className="text-primary font-semibold">Работаем круглосуточно</span>
              </div>
              <h1 className="text-5xl font-bold text-secondary mb-6">Лечение алкогольной зависимости</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Комплексная программа избавления от алкоголизма. От детоксикации до полной реабилитации. Анонимно и эффективно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Phone" size={20} />
                  +7 (800) 123-45-67
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Ambulance" size={20} />
                  Вызвать нарколога
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/ffe44746-9680-4a94-8938-0156760911ff.jpg"
                  alt="Лечение алкоголизма"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-4">Этапы лечения</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Комплексный подход, включающий медикаментозное лечение, психотерапию и социальную реабилитацию
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                step: 1, 
                icon: 'Droplets', 
                title: 'Детоксикация', 
                desc: 'Очищение организма от токсинов, купирование абстинентного синдрома',
                duration: '3-7 дней'
              },
              { 
                step: 2, 
                icon: 'Ban', 
                title: 'Кодирование', 
                desc: 'Медикаментозное или психотерапевтическое блокирование тяги к алкоголю',
                duration: '1 день'
              },
              { 
                step: 3, 
                icon: 'Brain', 
                title: 'Психотерапия', 
                desc: 'Работа с причинами зависимости, формирование новых навыков',
                duration: '1-3 месяца'
              },
              { 
                step: 4, 
                icon: 'TrendingUp', 
                title: 'Реабилитация', 
                desc: 'Возвращение к нормальной жизни, поддержка, профилактика срывов',
                duration: '3-12 месяцев'
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-3">{item.desc}</p>
                  <p className="text-sm text-primary font-semibold">Длительность: {item.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Методы кодирования</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Pill" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Медикаментозное кодирование</h3>
                <p className="text-muted-foreground mb-4">
                  Введение препаратов (Торпедо, Эспераль), блокирующих расщепление алкоголя. 
                  При употреблении возникает резкая негативная реакция.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Срок действия: от 1 года</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Высокая эффективность</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-primary">от 12 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full mb-4">Рекомендуем</div>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Syringe" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Вшивание импланта</h3>
                <p className="text-muted-foreground mb-4">
                  Подкожное введение импланта с пролонгированным действием. 
                  Обеспечивает стабильный уровень препарата в крови.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Срок действия: до 5 лет</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Максимальная надёжность</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-primary">от 20 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Психотерапевтическое</h3>
                <p className="text-muted-foreground mb-4">
                  Гипноз, метод Довженко. Работа с подсознанием для формирования 
                  установки на трезвость без медикаментов.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Срок действия: от 1 года</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                    <span>Без побочных эффектов</span>
                  </li>
                </ul>
                <p className="text-2xl font-bold text-primary">от 8 000 ₽</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Программы лечения</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-6">Амбулаторное лечение</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Детоксикация на дому или в клинике</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Кодирование выбранным методом</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Индивидуальная психотерапия</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Поддержка нарколога 3 месяца</span>
                  </li>
                </ul>
                <p className="text-3xl font-bold text-primary mb-6">от 50 000 ₽</p>
                <Button className="w-full" size="lg">Выбрать программу</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full mb-4">Полный курс</div>
                <h3 className="text-2xl font-bold text-secondary mb-6">Стационарное лечение</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Пребывание в клинике 21 день</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Полная детоксикация и восстановление</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Групповая и индивидуальная терапия</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Работа с созависимыми</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Поддержка 6 месяцев после выписки</span>
                  </li>
                </ul>
                <p className="text-3xl font-bold text-primary mb-6">от 150 000 ₽</p>
                <Button className="w-full" size="lg">Выбрать программу</Button>
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
                    alt="Петров Андрей Сергеевич"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-secondary mb-2">Петров Андрей Сергеевич</h3>
                  <p className="text-primary font-semibold mb-4">Врач-нарколог, к.м.н., 15 лет опыта</p>
                  <p className="text-muted-foreground mb-6">
                    Признанный эксперт в лечении алкогольной зависимости. Автор научных работ, 
                    специалист по комплексной реабилитации. Помог более 2500 пациентов.
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

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Начните лечение сегодня</h2>
            <p className="text-xl text-muted-foreground">Оставьте заявку — перезвоним в течение 15 минут. Анонимно и конфиденциально</p>
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
                    placeholder="Опишите ситуацию"
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

export default AlcoholTreatment;
