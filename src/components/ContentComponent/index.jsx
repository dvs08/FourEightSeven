import React from "react";
import Dropdown from "../Dropdown";

const index = () => {
  return (
    <div>
      <div className="">
        <ul className="flex flex-row space-x-10">
          <li className="">
            <a href="https://decemdrinks.com/products/london-dry">LONDON DRY</a>
          </li>
          <li className="underline hover:text-blue-500">
            <a href="/">SPICED BLEND</a>
          </li>
          <li className="focus:underline hover:text-blue-500">
            <a href="https://decemdrinks.com/products/aperitif">APERITF</a>
          </li>
          <li className="focus:underline hover:text-blue-500">
            <a href="https://decemdrinks.com/products/aperitif">TRIO</a>
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div className="flex flex-col space-y-6">
        <h1>SPICED BLEND</h1>
        <h2>made with Caribbean Rum</h2>
        <div className="flex flex-row space-x-[20vw] align-items-center">
          <p className="text-left">Blended in England</p>
          <p className="text-right">10%vol / 700ml</p>
        </div>
        <button className="text-white bg-black rounded-md w-[25rem] ">£29.95 — Add to Bag</button>
        <a className="text-center text-blue-500 align-middle" >FREE UK DELIVERY</a>
      </div>
      <Dropdown title={"DESCRIPTION"}>
        <p>
          Blending a duo of light and white Caribbean rums from Martinique and
          Dominican Republic as the smooth base. Spices are then added and the
          mix is allowed to steep for 2 days to draw out all of the flavour
          before being filtered and masterfully blended with natural distillates
          to 10%ABV. The result is a buttery, caramel-forward, savoury and spicy
          light spirit with a big impact both on the nose and the taste buds.
        </p>
      </Dropdown>
      <Dropdown title={"TASTE"}>
        <p>
          Deep bonfire toffee, warming savoury spice, rounded honey sweetness,
          buttery caramel throughout with a hint of tropical fruit.
        </p>
      </Dropdown>
      <Dropdown title={"SERVE"}>
        <p>
          Simply serve 50ml chilled over ice with 150ml premium Ginger Ale and a
          lime wedge. 2.3% ABV.
        </p>
      </Dropdown>
    </div>
  );
};

export default index;
