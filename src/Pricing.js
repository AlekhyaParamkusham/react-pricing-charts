import { useState } from "react";
import { ListGroup } from "react-bootstrap";
const Pricing = () => {
  const [price, setPrice] = useState([
    {
      id: 1,
      title: "Free",
      priceVal: "$0",
      spec1: "Single User",
      spec2: "5GB Storage",
      spec3: "Unlimited Public Projects",
      spec4: "Community Access",
      spec5: "Unlimited Private Project",
      spec6: "Dedicated Phone Support",
      spec7: "Free Subdomains",
      spec8: "Monthly Status Reports",
      i1: "fas fa-check",
      i2: "fas fa-check",
      i3: "fas fa-check",
      i4: "fas fa-check",
      i5: "fas fa-times",
      i6: "fas fa-times",
      i7: "fas fa-times",
      i8: "fas fa-times",
      op1: "enabled",
      op2: "enabled",
      op3: "enabled",
      op4: "enabled",
      op5: "disabled",
      op6: "disabled",
      op7: "disabled",
      op8: "disabled",
    },
    {
      id: 2,
      title: "Plus",
      priceVal: "$9",
      spec1: "5 Users",
      spec2: "50GB Storage",
      spec3: "Unlimited Public Projects",
      spec4: "Community Access",
      spec5: "Unlimited Private Projects",
      spec6: "Dedicated Phone Support",
      spec7: "Free Subdomains",
      spec8: "Monthly Status Reports",
      i1: "fas fa-check",
      i2: "fas fa-check",
      i3: "fas fa-check",
      i4: "fas fa-check",
      i5: "fas fa-check",
      i6: "fas fa-check",
      i7: "fas fa-check",
      i8: "fas fa-times",
      op1: "enabled",
      op2: "enabled",
      op3: "enabled",
      op4: "enabled",
      op5: "enabled",
      op6: "enabled",
      op7: "enabled",
      op8: "disabled",
    },
    {
      id: 3,
      title: "Pro",
      priceVal: "$49",
      spec1: "Unlimited Users",
      spec2: "150GB Storage",
      spec3: "Unlimited Public Projects",
      spec4: "Community Access",
      spec5: "Unlimited Public Projects",
      spec6: "Dedicated Phone Support",
      spec7: "Unlimited Free Subdomains",
      spec8: "Monthly Status Reports",
      i1: "fas fa-check",
      i2: "fas fa-check",
      i3: "fas fa-check",
      i4: "fas fa-check",
      i5: "fas fa-check",
      i6: "fas fa-check",
      i7: "fas fa-check",
      i8: "fas fa-check",
      op1: "enabled",
      op2: "enabled",
      op3: "enabled",
      op4: "enabled",
      op5: "enabled",
      op6: "enabled",
      op7: "enabled",
      op8: "enabled",
    },
  ]);

  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {price.map((Val, i) => (
              <div className="col-lg-4" key={Val.id}>
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      {Val.title}
                    </h5>
                    <h6 className="card-price text-center">
                      {Val.priceVal}
                      <span className="period">/month</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li className={Val.op1}>
                        <span className="fa-li">
                          <i className={Val.i1}></i>
                        </span>
                        {Val.spec1}
                      </li>
                      <li className={Val.op2}>
                        <span className="fa-li">
                          <i className={Val.i2}></i>
                        </span>
                        {Val.spec2}
                      </li>
                      <li className={Val.op3}>
                        <span className="fa-li">
                          <i className={Val.i3}></i>
                        </span>
                        {Val.spec3}
                      </li>
                      <li className={Val.op4}>
                        <span className="fa-li">
                          <i className={Val.i4}></i>
                        </span>
                        {Val.spec4}
                      </li>
                      <li className={Val.op5}>
                        <span className="fa-li">
                          <i className={Val.i5}></i>
                        </span>
                        {Val.spec5}
                      </li>
                      <li className={Val.op6}>
                        <span className="fa-li">
                          <i className={Val.i6}></i>
                        </span>
                        {Val.spec6}
                      </li>
                      <li className={Val.op7}>
                        <span className="fa-li">
                          <i className={Val.i7}></i>
                        </span>
                        {Val.spec7}
                      </li>
                      <li className={Val.op8}>
                        <span className="fa-li">
                          <i className={Val.i8}></i>
                        </span>
                        {Val.spec8}
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-block btn-primary text-uppercase"
                    >
                      Button
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
