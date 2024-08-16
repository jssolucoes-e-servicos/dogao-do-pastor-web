import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/activity_icon.png",
      title: "Captura de Leads",
      description:
        "Acelera by Vera é o atendimento comercial automatizado do mercado imobiliário. A tecnologia é muito mais eficiente no contato e na classificação dos clientes.",
    },
    {
      id: 1,
      iconUrl: "/images/sass.svg",
      title: "SaaS",
      description:
        "Nossa solução de geração de leads oferece uma abordagem flexível e econômica para empresas de todos os tamanhos. Com nossos pacotes por leads, você tem a liberdade de escolher a quantidade de leads que melhor atende às necessidades da sua empresa e só paga por eles.",
    },
    {
      id: 1,
      iconUrl: "/images/CRM.svg",
      title: "+CRM",
      description:
        "A integração com plataformas externas, como Anapro, CVCRM e Hypnobox, permite que os dados dos leads sejam sincronizados em tempo real. Isso significa que sua equipe de vendas pode acessar informações atualizadas sobre os leads em qualquer lugar, a qualquer momento, garantindo um acompanhamento eficaz e oportuno.",
    },
    {
      id: 2,
      iconUrl: "/images/chart_icon.png",
      title: "Omnichannel",
      description:
        "Começará na plataforma mais usada pelos brasileiros: o WhatsApp,com possibilidade de expansão para as demais redes, de acordo com o empreendimento",
    },
  ];
  return (
    <section >
       {/* <div id="anchor_solution" className="anchor-offset"></div> */}
      <Header title="Incorporadores" subtitle={`A primeira <strong style="color: #fb1949;">one-stop shop</strong> imobiliária  `} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]" >
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
