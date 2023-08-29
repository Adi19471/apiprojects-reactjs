import React, { useState } from "react";

const Signature = () => {
  const [name, setName] = useState("");
  const [date, setData] = useState();

  const Handlerform =(e)=>{
    e.preventDefault()
    console.log(e)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-center">Your Signature project ...</h3>
          </div>

          <div>
            {" "}
            <p className="text-decoration-underline">your's faithfuly</p>
            <div className="col-sm-6 d-offset">{name}</div>
            <div className="col-sm-6 offset-4">{date}</div>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        dolore vero. Sint nihil numquam debitis! Dolores maiores excepturi
        voluptatem, minima maxime voluptates dolor velit tenetur omnis, ratione
        facere unde iste! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempora eligendi optio repellendus voluptas tenetur quae id illum
        pariatur harum vitae, beatae omnis, quo quibusdam dolorum repudiandae
        accusantium rerum ex laborum. Magnam quis eum quod adipisci aliquam
        nostrum impedit ratione sit fuga natus mollitia dignissimos temporibus,
        optio, laudantium, incidunt soluta facilis corporis ab distinctio quasi.
        Vel consectetur ducimus fugiat quae quia. Recusandae eveniet fuga ipsam,
        repellendus suscipit voluptatibus doloribus minus odit voluptates
        assumenda nostrum non hic illum rerum maxime vel quas facere vitae
        voluptatem totam aspernatur. Voluptate suscipit accusantium vel optio.
        Quia illum sed autem quo doloribus a reprehenderit voluptate accusantium
        natus qui laborum cum sit sunt, eveniet quaerat omnis exercitationem
        dolorem quasi esse non. Non itaque consectetur cupiditate obcaecati
        fugit?
      </p>

      <div className="container-fluid">
        <form onClick={Handlerform}>


        <div className="row">
          <div className="col-md-6">
            <div className="formgroup">
              <input
                value={date}
                onChange={(e) => setData(e.target.value)}
                type="date"
                className="fotm-control"
                placeholder="Choose Date.."
              />
            </div>
          </div>

          <div className="col-sm-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default Signature;
