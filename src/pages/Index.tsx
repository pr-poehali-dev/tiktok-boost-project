import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [platform, setPlatform] = useState('tiktok');
  const [serviceType, setServiceType] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url || !serviceType) {
      toast({
        title: "Заполните все поля",
        description: "Пожалуйста, укажите ссылку и выберите тип накрутки",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Заказ принят! 🚀",
        description: `Накрутка ${serviceType} для ${platform === 'tiktok' ? 'TikTok' : 'Telegram'} началась. Результат через 10-30 минут.`,
      });
      setUrl('');
      setServiceType('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg animate-pulse-glow">
              <Icon name="TrendingUp" size={36} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              BoostHub
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональная накрутка просмотров, реакций и подписчиков для TikTok и Telegram
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Icon name="Zap" size={14} className="mr-1" />
              Быстро
            </Badge>
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
              <Icon name="Shield" size={14} className="mr-1" />
              Безопасно
            </Badge>
            <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
              <Icon name="Check" size={14} className="mr-1" />
              100% Бесплатно
            </Badge>
          </div>
        </header>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="border-2 shadow-2xl backdrop-blur-sm bg-card/95">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Rocket" size={24} className="text-primary" />
                Начать накрутку
              </CardTitle>
              <CardDescription>
                Выберите платформу, укажите ссылку и получите результат за считанные минуты
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={platform} onValueChange={setPlatform} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="tiktok" className="text-base">
                    <Icon name="Video" size={18} className="mr-2" />
                    TikTok
                  </TabsTrigger>
                  <TabsTrigger value="telegram" className="text-base">
                    <Icon name="Send" size={18} className="mr-2" />
                    Telegram
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <TabsContent value="tiktok" className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="tiktok-type" className="text-base">Тип накрутки</Label>
                      <Select value={serviceType} onValueChange={setServiceType}>
                        <SelectTrigger id="tiktok-type">
                          <SelectValue placeholder="Выберите тип накрутки" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="views">
                            <div className="flex items-center gap-2">
                              <Icon name="Eye" size={16} />
                              <span>Просмотры</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="likes">
                            <div className="flex items-center gap-2">
                              <Icon name="Heart" size={16} />
                              <span>Лайки</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="followers">
                            <div className="flex items-center gap-2">
                              <Icon name="Users" size={16} />
                              <span>Подписчики</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="comments">
                            <div className="flex items-center gap-2">
                              <Icon name="MessageCircle" size={16} />
                              <span>Комментарии</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="telegram" className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="telegram-type" className="text-base">Тип накрутки</Label>
                      <Select value={serviceType} onValueChange={setServiceType}>
                        <SelectTrigger id="telegram-type">
                          <SelectValue placeholder="Выберите тип накрутки" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="views">
                            <div className="flex items-center gap-2">
                              <Icon name="Eye" size={16} />
                              <span>Просмотры поста</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="reactions">
                            <div className="flex items-center gap-2">
                              <Icon name="ThumbsUp" size={16} />
                              <span>Реакции</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="subscribers">
                            <div className="flex items-center gap-2">
                              <Icon name="UserPlus" size={16} />
                              <span>Подписчики канала</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <div className="space-y-2">
                    <Label htmlFor="url" className="text-base">
                      Ссылка на {platform === 'tiktok' ? 'видео/профиль' : 'пост/канал'}
                    </Label>
                    <Input
                      id="url"
                      type="url"
                      placeholder={platform === 'tiktok' 
                        ? 'https://www.tiktok.com/@username/video/...' 
                        : 'https://t.me/channel/123'}
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="text-base"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Обработка...
                      </>
                    ) : (
                      <>
                        <Icon name="Sparkles" size={20} className="mr-2" />
                        Начать накрутку
                      </>
                    )}
                  </Button>
                </form>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Icon name="Tag" size={28} className="text-primary" />
            Тарифы
          </h2>
          <Card className="border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
              <CardTitle className="text-2xl text-center">Бесплатный доступ</CardTitle>
              <CardDescription className="text-center text-base">
                Все функции доступны абсолютно бесплатно
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Icon name="Infinity" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Без ограничений</h3>
                    <p className="text-sm text-muted-foreground">Делайте столько заказов, сколько нужно</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <Icon name="Clock" size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Быстрая обработка</h3>
                    <p className="text-sm text-muted-foreground">Результат через 10-30 минут</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <Icon name="Shield" size={24} className="text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Безопасность</h3>
                    <p className="text-sm text-muted-foreground">Все методы полностью безопасны</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
                  <Icon name="Headphones" size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Поддержка 24/7</h3>
                    <p className="text-sm text-muted-foreground">Всегда на связи в Telegram</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Icon name="HelpCircle" size={28} className="text-primary" />
            Часто задаваемые вопросы
          </h2>
          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    <span className="text-base font-semibold">Это действительно бесплатно?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, абсолютно все услуги нашего сервиса предоставляются бесплатно. Никаких скрытых платежей или подписок.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    <span className="text-base font-semibold">Как быстро начинается накрутка?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    После отправки заказа накрутка начинается автоматически в течение 5-10 минут. Полный результат вы увидите через 10-30 минут в зависимости от нагрузки.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    <span className="text-base font-semibold">Это безопасно для моего аккаунта?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, мы используем только безопасные методы накрутки, которые не нарушают правила платформ. Ваш аккаунт в полной безопасности.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    <span className="text-base font-semibold">Сколько раз можно заказывать накрутку?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Без ограничений! Вы можете делать столько заказов, сколько вам необходимо. Сервис доступен 24/7.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    <span className="text-base font-semibold">Что делать, если возникли проблемы?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Свяжитесь с нашей службой поддержки в Telegram: @UserRadmirow или @Smerteleno_bolen. Мы на связи 24/7 и всегда готовы помочь!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <footer className="text-center py-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="max-w-2xl mx-auto border-2 shadow-xl">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                Контакты
              </h3>
              <p className="text-muted-foreground mb-4">
                Остались вопросы? Свяжитесь с нами в Telegram
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="gap-2 hover:bg-primary/10 hover:border-primary transition-all"
                  onClick={() => window.open('https://t.me/UserRadmirow', '_blank')}
                >
                  <Icon name="Send" size={18} />
                  @UserRadmirow
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="gap-2 hover:bg-primary/10 hover:border-primary transition-all"
                  onClick={() => window.open('https://t.me/Smerteleno_bolen', '_blank')}
                >
                  <Icon name="Send" size={18} />
                  @Smerteleno_bolen
                </Button>
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground mt-6">
            © 2024 BoostHub. Все права защищены.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
