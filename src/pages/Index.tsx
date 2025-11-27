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
  };

  const services = [
    {
      icon: 'Home',
      title: 'Уборка квартир',
      description: 'Профессиональная уборка жилых помещений любой площади'
    },
    {
      icon: 'Building2',
      title: 'Офисная уборка',
      description: 'Поддержание идеальной чистоты в бизнес-пространствах'
    },
    {
      icon: 'Sparkles',
      title: 'Генеральная уборка',
      description: 'Глубокая уборка с применением премиальных средств'
    },
    {
      icon: 'Droplets',
      title: 'Химчистка',
      description: 'Деликатная чистка мебели и текстиля'
    },
    {
      icon: 'Wind',
      title: 'Озонирование',
      description: 'Устранение запахов и дезинфекция помещений'
    },
    {
      icon: 'Gem',
      title: 'VIP-уборка',
      description: 'Индивидуальный подход к элитной недвижимости'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/d6242da3-76f2-4208-bcab-846755e6d522/files/06d22f1b-1770-4083-899b-2788334e43da.jpg',
      title: 'Гостиная премиум-класса',
      description: 'ЖК "Триумф Палас"'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d6242da3-76f2-4208-bcab-846755e6d522/files/22ceb28d-c3de-4256-b788-7b3663f37b8d.jpg',
      title: 'Кухня в современном стиле',
      description: 'Частная резиденция'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d6242da3-76f2-4208-bcab-846755e6d522/files/b033c0dd-4c7a-4736-819e-676ab9edeb4a.jpg',
      title: 'Ванная комната',
      description: 'Апартаменты Moskva City'
    }
  ];

  const reviews = [
    {
      name: 'Екатерина Волкова',
      text: 'Безупречный сервис! Команда работает быстро и очень качественно. Квартира сияет чистотой.',
      rating: 5
    },
    {
      name: 'Александр Петров',
      text: 'Пользуюсь услугами CLEANDO уже год. Профессионализм на высшем уровне.',
      rating: 5
    },
    {
      name: 'Ольга Смирнова',
      text: 'Лучшая клининговая компания! Внимательны к деталям, используют качественную химию.',
      rating: 5
    }
  ];

  const prices = [
    {
      name: 'Базовая',
      price: '5 000',
      features: [
        'Уборка до 50 м²',
        'Влажная уборка',
        'Пылесос',
        'Мытьё окон (до 3 шт)'
      ]
    },
    {
      name: 'Стандарт',
      price: '8 500',
      features: [
        'Уборка до 100 м²',
        'Генеральная уборка',
        'Химчистка дивана',
        'Мытьё окон (до 6 шт)',
        'Балкон/лоджия'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '15 000',
      features: [
        'Уборка любой площади',
        'VIP-уборка',
        'Химчистка мебели',
        'Озонирование',
        'Все окна',
        'Личный менеджер'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <img src="https://cdn.poehali.dev/files/272b4eb0-ddf9-4a7c-aa2c-315c5252731a.png" alt="CLEANDO" className="h-12" />
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Услуги</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-accent transition-colors">Портфолио</a>
              <a href="#reviews" className="text-sm font-medium hover:text-accent transition-colors">Отзывы</a>
              <a href="#prices" className="text-sm font-medium hover:text-accent transition-colors">Цены</a>
              <a href="#contacts" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              +7 (495) 123-45-67
            </Button>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
              Премиальный <br />
              <span className="font-semibold">клининг</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Создаём идеальную чистоту в вашем пространстве с заботой о каждой детали
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Заказать уборку
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Наши <span className="font-semibold">услуги</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon as any} className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Наши <span className="font-semibold">работы</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Отзывы <span className="font-semibold">клиентов</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-sm animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Тарифы <span className="font-semibold">и цены</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((plan, index) => (
              <Card key={index} className={`border-2 transition-all duration-300 hover:shadow-xl animate-scale-in ${plan.popular ? 'border-accent shadow-lg scale-105' : 'border-transparent shadow-sm'}`} style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                        Популярный
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-center mb-2">{plan.name}</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-accent mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Свяжитесь <span className="font-semibold">с нами</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">Ежедневно с 8:00 до 22:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@cleando.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Тверская, д. 1</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src="https://cdn.poehali.dev/files/272b4eb0-ddf9-4a7c-aa2c-315c5252731a.png" alt="CLEANDO" className="h-10" />
            <p className="text-sm text-muted-foreground">© 2024 CLEANDO. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;