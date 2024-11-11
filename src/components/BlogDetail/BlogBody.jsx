import React from "react";
import Banner from "../Blog/Banner";
import Image from "next/image";

const BlogBody = () => {
  return (
    <div className="section-padding">
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
        minima veritatis quas sequi iure quibusdam, dolores cupiditate
        temporibus ullam. Magni inventore, culpa in corporis illo assumenda
        architecto reiciendis quisquam itaque iste magnam perspiciatis adipisci
        reprehenderit natus deserunt accusantium quidem amet quibusdam? Aut
        omnis reiciendis repudiandae aperiam blanditiis natus, ipsum nihil
        tempora dicta beatae quas rem nemo fuga saepe illum accusamus fugit
        culpa modi cupiditate? Explicabo, quas eos beatae nihil unde repudiandae
        ab vel voluptate ipsum quis quidem delectus fugit.
      </p>
      <p className="section-padding-top">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
        minima veritatis quas sequi iure quibusdam, dolores cupiditate
        temporibus ullam. Magni inventore, culpa in corporis illo assumenda
        architecto reiciendis quisquam itaque iste magnam perspiciatis adipisci
        reprehenderit natus deserunt accusantium quidem amet quibusdam? Aut
        omnis reiciendis repudiandae aperiam blanditiis natus, ipsum nihil
        tempora dicta beatae quas rem nemo fuga saepe illum accusamus fugit
        culpa modi cupiditate? Explicabo, quas eos beatae nihil unde repudiandae
        ab vel voluptate ipsum quis quidem delectus fugit.
      </p>
      <Banner />
      <p className="section-padding-top">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
        minima veritatis quas sequi iure quibusdam, dolores cupiditate
        temporibus ullam. Magni inventore, culpa in corporis illo assumenda
        architecto reiciendis quisquam itaque iste magnam perspiciatis adipisci
        reprehenderit natus deserunt accusantium quidem amet quibusdam? Aut
        omnis reiciendis repudiandae aperiam blanditiis natus, ipsum nihil
        tempora dicta beatae quas rem nemo fuga saepe illum accusamus fugit
        culpa modi cupiditate? Explicabo, quas eos beatae nihil unde repudiandae
        ab vel voluptate ipsum quis quidem delectus fugit.
      </p>
      <Image
        width={1000}
        height={400}
        className="w-full h-[400px] object-cover section-padding-top rounded-[20px] "
        src="/assets/posts/1x/post-2.png"
        alt="post image"
      />
      <p className="section-padding-top">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
        minima veritatis quas sequi iure quibusdam, dolores cupiditate
        temporibus ullam. Magni inventore, culpa in corporis illo assumenda
        architecto reiciendis quisquam itaque iste magnam perspiciatis adipisci
        reprehenderit natus deserunt accusantium quidem amet quibusdam? Aut
        omnis reiciendis repudiandae aperiam blanditiis natus, ipsum nihil
        tempora dicta beatae quas rem nemo fuga saepe illum accusamus fugit
        culpa modi cupiditate? Explicabo, quas eos beatae nihil unde repudiandae
        ab vel voluptate ipsum quis quidem delectus fugit.
      </p>
      <div className="w-full section-padding-top gap-5 grid grid-cols-2 ">
        <Image
          src="/assets/posts/1x/post-2.png"
          alt="post image"
          width={400}
          height={400}
          className="w-full object-cover rounded-[20px] h-[400px]"
        />
        <p className="w-full">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          debitis cumque doloremque, autem qui necessitatibus voluptate delectus
          sequi error perferendis totam libero a placeat ad voluptatibus ut
          ducimus repudiandae. Pariatur, quibusdam! Necessitatibus, quod
          veritatis. Deserunt, alias! Voluptatibus doloribus cupiditate
          explicabo atque consequuntur maiores tempore recusandae molestias
          deleniti labore neque accusantium sed omnis consectetur alias totam,
          sapiente odit ex eos adipisci?
        </p>
      </div>
    </div>
  );
};

export default BlogBody;
