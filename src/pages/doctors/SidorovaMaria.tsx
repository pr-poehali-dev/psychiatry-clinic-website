import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const SidorovaMaria = () => {
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

      {/* Doctor Profile */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Photo */}
            <div className="md:col-span-1">
              <div className="sticky top-32">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                  <img 
                    src="https://cdn.poehali.dev/projects/6186b5dd-ed8b-48d6-853e-c1baf83a4f2d/files/ffe44746-9680-4a94-8938-0156760911ff.jpg"
                    alt="Сидорова Мария Александровна"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <Card className="mt-6 border-2 border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" className="text-primary" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground">Записаться</p>
                        <p className="font-semibold">+7 (800) 123-45-67</p>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Онлайн-запись
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-secondary mb-2">Сидорова Мария Александровна</h1>
                <p className="text-xl text-primary font-semibold mb-4">Психотерапевт, семейный консультант</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Award" size={20} className="text-primary" />
                    <span>18 лет опыта</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="GraduationCap" size={20} className="text-primary" />
                    <span>Высшая квалификация</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Users" size={20} className="text-primary" />
                    <span>Более 2800 консультаций</span>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                      <Icon name="Stethoscope" className="text-primary" size={24} />
                      Специализация
                    </h2>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Индивидуальная психотерапия при депрессии и тревоге</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Семейная и парная терапия</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Работа с личностными кризисами и потерями</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Преодоление последствий психологических травм</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={16} />
                        <span>Коррекция самооценки и уверенности в себе</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                      <Icon name="GraduationCap" className="text-primary" size={24} />
                      Образование и квалификация
                    </h2>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-semibold text-secondary">2005 год</p>
                        <p className="text-muted-foreground">Московский государственный университет им. М.В. Ломоносова, факультет психологии</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-semibold text-secondary">2007 год</p>
                        <p className="text-muted-foreground">Программа профессиональной переподготовки «Психотерапия»</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-semibold text-secondary">2010 год</p>
                        <p className="text-muted-foreground">Сертификат специалиста по семейной системной психотерапии</p>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-semibold text-secondary">2014 год</p>
                        <p className="text-muted-foreground">Присвоение высшей квалификационной категории</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                      <Icon name="FileText" className="text-primary" size={24} />
                      Профессиональный опыт
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Мария Александровна — опытный психотерапевт с 18-летней практикой работы с широким спектром психологических проблем. 
                      Особую экспертизу имеет в области семейной терапии и работы с парами, переживающими кризисные периоды.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      В своей работе придерживается интегративного подхода, сочетая методы когнитивно-поведенческой терапии, 
                      гештальт-терапии и системной семейной терапии. Создает безопасное пространство для глубокой работы с эмоциями и отношениями.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                      <Icon name="Heart" className="text-primary" size={24} />
                      Методы работы
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-semibold text-secondary mb-2">КПТ</h3>
                        <p className="text-sm text-muted-foreground">Когнитивно-поведенческая терапия для работы с тревогой и депрессией</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-semibold text-secondary mb-2">Семейная терапия</h3>
                        <p className="text-sm text-muted-foreground">Системный подход к решению семейных конфликтов</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-semibold text-secondary mb-2">Гештальт-терапия</h3>
                        <p className="text-sm text-muted-foreground">Работа с незавершенными ситуациями и эмоциями</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <h3 className="font-semibold text-secondary mb-2">Схема-терапия</h3>
                        <p className="text-sm text-muted-foreground">Изменение глубинных убеждений и паттернов поведения</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">Запишитесь на консультацию</h3>
                <p className="text-muted-foreground mb-6">Психотерапия — это пространство для роста и изменений. Первая встреча поможет понять, подходим ли мы друг другу</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <Icon name="Phone" size={20} />
                    Позвонить сейчас
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Icon name="Calendar" size={20} />
                    Онлайн-запись
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SidorovaMaria;
