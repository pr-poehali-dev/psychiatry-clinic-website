import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const HomeVisit = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Врач выезжает к вам. Ожидайте звонка.');
    setFormData({ name: '', phone: '', address: '', message: '' });
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
              <div className="inline-block px-4 py-2 bg-red-100 rounded-full mb-4">
                <span className="text-red-600 font-semibold">Экстренная помощь 24/7</span>
              </div>
              <h1 className="text-5xl font-bold text-secondary mb-6">Вызов врача на дом</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Срочная наркологическая и психиатрическая помощь на дому. Выезд в течение часа. Полная анонимность и конфиденциальность.
              </p>
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                  <div>
                    <p className="font-bold text-secondary text-lg">Работаем круглосуточно</p>
                    <p className="text-muted-foreground">Без выходных и праздников</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Ambulance" className="text-primary" size={32} />
                  <div>
                    <p className="font-bold text-secondary text-lg">Приезжаем быстро</p>
                    <p className="text-muted-foreground">В течение 30-60 минут</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto gap-2 text-lg h-14">
                <Icon name="Phone" size={24} />
                +7 (800) 123-45-67
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/ffe44746-9680-4a94-8938-0156760911ff.jpg"
                  alt="Вызов врача на дом"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Когда нужен вызов врача на дом</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: 'Wine', 
                title: 'Алкогольный запой', 
                desc: 'Вывод из запоя, детоксикация, капельница. Работаем с любой стадией опьянения',
                urgent: true 
              },
              { 
                icon: 'AlertTriangle', 
                title: 'Абстинентный синдром', 
                desc: 'Похмелье, ломка. Быстрое облегчение состояния медикаментами',
                urgent: true 
              },
              { 
                icon: 'Activity', 
                title: 'Психотическое состояние', 
                desc: 'Агрессия, бред, галлюцинации. Безопасное купирование острого состояния',
                urgent: true 
              },
              { 
                icon: 'Heart', 
                title: 'Депрессия, суицид', 
                desc: 'Тяжёлая депрессия, суицидальные мысли. Экстренная психиатрическая помощь',
                urgent: true 
              },
              { 
                icon: 'Users', 
                title: 'Консультация родственников', 
                desc: 'Беседа с близкими, рекомендации по уходу за больным, план лечения',
                urgent: false 
              },
              { 
                icon: 'Pill', 
                title: 'Кодирование на дому', 
                desc: 'Все виды кодирования в комфортных домашних условиях',
                urgent: false 
              }
            ].map((item, index) => (
              <Card key={index} className={`border-2 ${item.urgent ? 'border-red-200 bg-red-50/50' : ''} hover:shadow-lg transition-all`}>
                <CardContent className="p-6">
                  {item.urgent && (
                    <div className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-3">
                      СРОЧНО
                    </div>
                  )}
                  <div className={`w-14 h-14 ${item.urgent ? 'bg-red-100' : 'bg-primary/10'} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon name={item.icon as any} className={item.urgent ? 'text-red-600' : 'text-primary'} size={28} />
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
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Что входит в выезд</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Stethoscope', title: 'Осмотр', desc: 'Полное обследование пациента' },
              { icon: 'Syringe', title: 'Капельница', desc: 'Детоксикация, восстановление' },
              { icon: 'Pill', title: 'Медикаменты', desc: 'Все препараты с собой' },
              { icon: 'FileText', title: 'Рекомендации', desc: 'План дальнейшего лечения' }
            ].map((item, index) => (
              <Card key={index} className="border-2 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Стоимость услуг</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Консультация на дому</h3>
                <p className="text-4xl font-bold text-primary mb-6">5 000 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Выезд врача</span>
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
                <Button className="w-full">Вызвать врача</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-8">
                <div className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full mb-4">Популярное</div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Вывод из запоя</h3>
                <p className="text-4xl font-bold text-primary mb-6">8 000 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Выезд + осмотр</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Детоксикация капельницей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Все препараты</span>
                  </li>
                </ul>
                <Button className="w-full">Вызвать сейчас</Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-4">Экстренная помощь</h3>
                <p className="text-4xl font-bold text-primary mb-6">12 000 ₽</p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Приезд в течение 30 мин</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Купирование острого состояния</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Работа с психозом, агрессией</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Срочный вызов</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">Гарантии анонимности</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Обычный автомобиль</h3>
                <p className="text-muted-foreground">Врач приезжает на личном авто без опознавательных знаков клиники</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheck" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Без постановки на учёт</h3>
                <p className="text-muted-foreground">Информация о лечении не передаётся никуда. Полная конфиденциальность</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Lock" className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-2">Защита данных</h3>
                <p className="text-muted-foreground">Все сведения о пациенте защищены врачебной тайной</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Вызвать врача на дом</h2>
            <p className="text-xl text-muted-foreground">Укажите адрес и контакты — врач выезжает к вам</p>
          </div>
          <Card className="border-2 border-primary shadow-xl">
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
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (___) ___-__-__" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Адрес *</label>
                  <Input 
                    placeholder="Улица, дом, квартира" 
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Опишите ситуацию</label>
                  <Textarea 
                    placeholder="Что случилось? Какая помощь нужна?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Ambulance" size={20} className="mr-2" />
                  Вызвать врача сейчас
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Или позвоните по телефону: <span className="font-bold text-primary">+7 (800) 123-45-67</span>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomeVisit;
