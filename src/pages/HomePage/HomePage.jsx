import { 
  Div,
  Section,
  P,
  Ul,
  Li,
  H4
} from "./HomePage.styled";
 

const HomePage = () => {
  return (
    <Div>
      <Section>
        {/* slider */}
        <h1 style={{ textAlign: 'center' }}>
          Интернет-магазин 
          <span style={{color: 'var(--text-second-orange)'}}>
            {" "} Electro world {" "} 
          </span>
          - Ваш надёжный проводник в мир электротоваров!
        </h1>
        <h3 style={{ padding: '8px 0px', textAlign: 'center' }}><i> Всё для дома, работы и отдыха!</i></h3>
        <P>
          Приветствуем вас в интернет-магазине <b>Electro world</b>!
        </P>  
        <P>
          <b>Electro world</b> - это место, где Вы найдёте всё необходимое для дома, работы, дачи, офиса, ремонта и отдыха.
          У нас широкий выбор товаров от мировых производителей по доступным ценам.
        </P>  
        <P>
          <b><i>В нашем ассортименте:</i></b>
        </P>
        <Ul>
          <Li>
            <i>Бытовая техника:</i> холодильники, стиральные машины, посудомоечные машины, пылесосы, телевизоры, смартфоны и многое другое.
          </Li>
          <Li>
            <i>Электроинструменты:</i> дрели, перфораторы, шуруповерты, лобзики, болгарки и т.д.
          </Li>
          <Li>
            <i>Кабель и провод:</i> силовой кабель, монтажный провод, витая пара, телефонный кабель и т.д.
          </Li>
          <Li>
            <i>Светильники:</i> люстры, лампы, бра, торшеры, светодиодные ленты и т.д.
          </Li>
          <Li>
            <i>Розетки и выключатели:</i> различной конфигурации и цвета.
          </Li>
          <Li>
            <i>Батарейки и аккумуляторы:</i> для разных устройств.
          </Li>
        </Ul>
        <P>
          А так же много других интересных и полезных товаров!
        </P>
        <P>
          <b><i>Почему стоит выбрать нас:</i></b>
        </P>
        <Ul>
          <Li>
              <i>Широкий выбор товаров:</i> у нас вы найдете всё, что вам нужно.
          </Li>
          <Li>
            <i>Доступные цены:</i> мы предлагаем товары по низким ценам.
          </Li>
          <Li>
            <i>Высокое качество:</i> мы продаем только сертифицированные товары.
          </Li>
          <Li>
            <i>Удобная доставка:</i> мы доставляем товары по всей Украине.
          </Li>
          <Li>
            <i>Гарантия на все товары:</i> мы уверены в качестве наших товаров.
          </Li>
        </Ul>
        <P>
          <b><i>Специальные предложения:</i></b>
        </P>  
        <Ul>
          <Li>
            Скидки на новинки!
          </Li>
          <Li>
            Акции и распродажи!
          </Li>
          <Li>
            Бесплатная доставка при заказе от 5000 грн!
          </Li>
          <Li>

          </Li>
        </Ul>
        <P>
          <b><i>Прямо сейчас Вы можете:</i></b>
        </P>
        <Ul>
          <Li> Заказать интересующие Вас товары в нашем магазине!</Li>
          <Li> Позвонить нам и получить консультацию!</Li>
          <Li> Оставить заявку на сайте и мы перезвоним Вам!</Li>
        </Ul>
        <H4>
          <b>Заходите к нам и убедитесь сами!</b>
        </H4>
      </Section>
    </Div>
  );
};

export default HomePage;