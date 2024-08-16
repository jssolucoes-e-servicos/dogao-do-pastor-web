import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const appReviewData = [
    {
      id: 0,
      imageUrl: "https://aceleraia.com.br/images/landingpage/acelera/verificando-celular.png",
      reviewerName: "Sua incorporadora",
      review:
        "Transforma a sua incorporadora em uma máquina de vendas com inteligência e agilidade.",
    },

    {
      id: 1,
      imageUrl: "https://aceleraia.com.br/images/landingpage/acelera/celular-funcao.png",
      reviewerName: "O script adaptado para tipo de cliente",
      review:
        "Chat automatizado e personalizado para cada tipo de cliente (por empreendimento, base antiga ou captação AceleraIa) [somente via WhatsApp na fase 1]",
    },
    {
      id: 2,
      imageUrl: "https://media.licdn.com/dms/image/D4D22AQEwNxIWyitudw/feedshare-shrink_800/0/1700596837793?e=2147483647&v=beta&t=ghKQlhMp6YnRvEW9qlqZdn0NEsABRNIZPdn0NNzrZZ0",
      reviewerName: "Ferramenta personalizada",
      review: "AceleraIa classifica cada um deles e entrega uma lista de perfil qualificada, só para o time de corretores agendar a visita.",
    },
    {
      id: 3,
      imageUrl: "https://media.licdn.com/dms/image/D4D1FAQHKflrTqQB7kg/feedshare-document-images_480/1/1692799620014?e=1717632000&v=beta&t=Zmy3EmCzsoPyy8QzS3zVwHzv8dD7zjAqLMjK08N5iw4",
      reviewerName: "Integração aos principais CRMs",
      review:
        "Personalização para atender e integrar a sua incorporadora",
    },
  ];
  return (
    <section className="mt-[9rem]">
      <Header title="Acelera by Vera" subtitle={`Quais são <strong style="color: #fb1949;">as vantagens para a sua</strong> incorporadora?`} />
      <div className="grid grid-cols-1 gap-16  md:grid-cols-2 mt-8 md:mt-[6.75rem]">
        {appReviewData.map((review) => (
          <TestimonialCard
            key={review.id}
            imageUrl={review.imageUrl}
            review={review.review}
            reviewerName={review.reviewerName}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
