import React from 'react';
import './Education.css';

export default class Education extends React.Component {
  render() {
    return (
      <div className="detail">
        <h3>EDUCATION</h3>
        <ul>
          <li>
            <p className="year">1990</p>
            <div className="box">
              <p className="location">I was born in Katowice</p>
              <p>
                Det er en kendsgerning, at man bliver distraheret af læsbart
                side, når man betragter dens layout.
              </p>
            </div>
          </li>
          <li>
            <p className="year">2005</p>
            <div className="box">
              <p className="location">
                Secondary school specializing in artistic
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </li>
          <li>
            <p className="year">2009</p>
            <div className="box">
              <p className="location">
                First level graduation in Graphic Design
              </p>
              <p>
                In tegenstelling tot wat algemeen aangenomen wordt is Lorem niet
                niet zomaar willekeurige tekst.
              </p>
            </div>
          </li>
          <li>
            <p className="year">2012</p>
            <div className="box">
              <p className="location">
                Secondary level graduation in Graphic Design
              </p>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
