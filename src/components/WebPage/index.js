import { Component } from "react";

import { MdNotifications } from "react-icons/md";

import { FiLogIn } from "react-icons/fi";

import "./index.css";

var d = new Date();
var curr_hour = d.getHours();

var curr_min = d.getMinutes();

var curr_sec = d.getSeconds();

let time;
if (curr_hour < 10) {
  time = 0 + curr_hour + ":" + curr_min + ":" + curr_sec;
} else if (curr_min < 10) {
  time = curr_hour + ":" + 0 + curr_min + ":" + curr_sec;
} else if (curr_sec < 10) {
  time = curr_hour + ":" + curr_min + ":" + 0 + curr_sec;
} else {
  time = curr_hour + ":" + curr_min + ":" + curr_sec;
}

const tableData = [
  {
    id: 1,
    inverter: "Block-1_Inverter-1",
    voltage: 232,
    current: 1301.44,
    activePower: 957.1,
    apparentPower: 977.55,
    igtTemp: 50,
    inductorTemp: 42,
    inputPower: 963.1,
    ambientTemp: 25,
    dcVoltage: 656,
    lifeTimeEnergy: 937.33,
    energyPerDay: 787.33,
    waterTemp: 24,
  },
  {
    id: 2,
    inverter: "Block-1_Inverter-2",
    voltage: 234,
    current: 1292.91,
    activePower: 960.37,
    apparentPower: 973.39,
    igtTemp: 52,
    inductorTemp: 38,
    inputPower: 962.37,
    ambientTemp: 24,
    dcVoltage: 659,
    lifeTimeEnergy: 937.34,
    energyPerDay: 787.34,
    waterTemp: 20,
  },
  {
    id: 3,
    inverter: "Block-1_Inverter-3",
    voltage: 230,
    current: 1296.97,
    activePower: 953.83,
    apparentPower: 977.28,
    igtTemp: 40,
    inductorTemp: 42,
    inputPower: 962.83,
    ambientTemp: 23,
    dcVoltage: 658,
    lifeTimeEnergy: 937.35,
    energyPerDay: 787.35,
    waterTemp: 23,
  },
  {
    id: 4,
    inverter: "Block-1_Inverter-1",
    voltage: 234,
    current: 1294.79,
    activePower: 951.75,
    apparentPower: 971.13,
    igtTemp: 48,
    inductorTemp: 45,
    inputPower: 961.75,
    ambientTemp: 24,
    dcVoltage: 655,
    lifeTimeEnergy: 937.36,
    energyPerDay: 787.36,
    waterTemp: 23,
  },
  {
    id: 5,
    inverter: "Block-1_Inverter-2",
    voltage: 237,
    current: 1298.68,
    activePower: 957.99,
    apparentPower: 960.46,
    igtTemp: 46,
    inductorTemp: 36,
    inputPower: 960.99,
    ambientTemp: 24,
    dcVoltage: 655,
    lifeTimeEnergy: 937.37,
    energyPerDay: 787.37,
    waterTemp: 19,
  },
  {
    id: 6,
    inverter: "Block-1_Inverter-3",
    voltage: 230,
    current: 1292.92,
    activePower: 952.6,
    apparentPower: 974,
    igtTemp: 43,
    inductorTemp: 38,
    inputPower: 961.6,
    ambientTemp: 21,
    dcVoltage: 655,
    lifeTimeEnergy: 937.38,
    energyPerDay: 787.38,
    waterTemp: 19,
  },
  {
    id: 7,
    inverter: "Block-1_Inverter-1",
    voltage: 236,
    current: 1297.76,
    activePower: 959.44,
    apparentPower: 975.9,
    igtTemp: 37,
    inductorTemp: 42,
    inputPower: 967.44,
    ambientTemp: 24,
    dcVoltage: 652,
    lifeTimeEnergy: 937.39,
    energyPerDay: 787.39,
    waterTemp: 23,
  },
  {
    id: 8,
    inverter: "Block-1_Inverter-2",
    voltage: 232,
    current: 1295.97,
    activePower: 952.93,
    apparentPower: 957.28,
    igtTemp: 38,
    inductorTemp: 45,
    inputPower: 960.83,
    ambientTemp: 21,
    dcVoltage: 668,
    lifeTimeEnergy: 937.5,
    energyPerDay: 787.4,
    waterTemp: 20,
  },
  {
    id: 9,
    inverter: "Block-1_Inverter-3",
    voltage: 233,
    current: 1280.97,
    activePower: 963.83,
    apparentPower: 975.28,
    igtTemp: 35,
    inductorTemp: 41,
    inputPower: 960.83,
    ambientTemp: 24,
    dcVoltage: 628,
    lifeTimeEnergy: 930.35,
    energyPerDay: 787.41,
    waterTemp: 21,
  },
  {
    id: 10,
    inverter: "Block-1_Inverter-1",
    voltage: 236,
    current: 1276.97,
    activePower: 952.83,
    apparentPower: 967.18,
    igtTemp: 42,
    inductorTemp: 46,
    inputPower: 965.83,
    ambientTemp: 20,
    dcVoltage: 678,
    lifeTimeEnergy: 937.25,
    energyPerDay: 787.42,
    waterTemp: 19,
  },
  {
    id: 11,
    inverter: "Block-1_Inverter-2",
    voltage: 233,
    current: 1295.97,
    activePower: 943.83,
    apparentPower: 972.28,
    igtTemp: 41,
    inductorTemp: 38,
    inputPower: 965.83,
    ambientTemp: 22,
    dcVoltage: 678,
    lifeTimeEnergy: 939.35,
    energyPerDay: 787.43,
    waterTemp: 20,
  },
  {
    id: 12,
    inverter: "Block-1_Inverter-3",
    voltage: 235,
    current: 1295.97,
    activePower: 955.7,
    apparentPower: 971.28,
    igtTemp: 42,
    inductorTemp: 36,
    inputPower: 960.25,
    ambientTemp: 23,
    dcVoltage: 666,
    lifeTimeEnergy: 940.35,
    energyPerDay: 787.44,
    waterTemp: 21,
  },
  {
    id: 13,
    inverter: "Block-1_Inverter-1",
    voltage: 232,
    current: 1282.97,
    activePower: 943.83,
    apparentPower: 974.28,
    igtTemp: 43,
    inductorTemp: 37,
    inputPower: 959.83,
    ambientTemp: 20,
    dcVoltage: 678,
    lifeTimeEnergy: 938.35,
    energyPerDay: 787.45,
    waterTemp: 21,
  },
  {
    id: 14,
    inverter: "Block-1_Inverter-2",
    voltage: 230,
    current: 1290.96,
    activePower: 952.83,
    apparentPower: 976.28,
    igtTemp: 42,
    inductorTemp: 40,
    inputPower: 961.83,
    ambientTemp: 21,
    dcVoltage: 679,
    lifeTimeEnergy: 932.35,
    energyPerDay: 787.46,
    waterTemp: 20,
  },
  {
    id: 15,
    inverter: "Block-1_Inverter-3",
    voltage: 234,
    current: 1298.95,
    activePower: 955.83,
    apparentPower: 978.28,
    igtTemp: 41,
    inductorTemp: 39,
    inputPower: 963.75,
    ambientTemp: 20,
    dcVoltage: 655,
    lifeTimeEnergy: 936.35,
    energyPerDay: 787.47,
    waterTemp: 22,
  },
];

class WebPage extends Component {
  render() {
    return (
      <div className="bg-container">
        <nav className="navbar-container">
          <div className="logo-card">
            <h1 className="logo-bar">WASP</h1>
            <div className="vertical"></div>
            <p className="board"> Dashboard</p>
          </div>
          <ul className="list-container">
            <li className="list-item">
              <>
                <MdNotifications size={22} className="icon" />
                <div className="notification-count">
                  <span className="count">0</span>
                </div>
              </>
            </li>
            <li className="date">March 14, 2023</li>
            <li className="time">{time}</li>
            <li className="btn-list">
              <button className="btn">Login</button>
              <FiLogIn size={20} />
            </li>
          </ul>
        </nav>
        <ul className="cards-item">
          <div className="card-container">
            <p className="para">Today's Generation</p>
            <h1 className="power">14.36 MW</h1>
          </div>
          <div className="efficiency-container">
            <p className="efficiency">Plant Efficiency</p>
            <h1 className="percent">95.75%</h1>
          </div>
          <div className="energy-container">
            <p className="energy">Today's Energy Consumption</p>
            <h1 className="powers">11.18 KWh</h1>
          </div>
          <div className="life-time-container">
            <p className="life-time">Life Time Energy</p>
            <h1 className="rating">1406.1 GWh</h1>
          </div>
        </ul>
        <div className="table-container">
          <h1 className="data-heading">Inverters Data Table</h1>
          <hr className="line" />
          <div className="table-card">
            <table>
              <tr>
                <th>Inverter</th>
                <th>Voltage(kV)</th>
                <th>Current(Amp)</th>
                <th>Active Power(MW)</th>
                <th>Apparent Power(MVA)</th>
                <th>IGBT Temp(C)</th>
                <th>Inductor Temp(C)</th>
                <th>DC Input Power(W)</th>
                <th>Ambient Temp(C)</th>
                <th>DC Voltage(V)</th>
                <th>Life Time Energy(J)</th>
                <th>Energy Per Day(KW)</th>
                <th>Water Temp(C)</th>
              </tr>

              {tableData.map((eachData) => (
                <tr key={eachData.id}>
                  <td>{eachData.inverter}</td>
                  <td>{eachData.voltage}</td>
                  <td>{eachData.current}</td>
                  <td>{eachData.activePower}</td>
                  <td>{eachData.apparentPower}</td>
                  <td>{eachData.igtTemp}</td>
                  <td>{eachData.inductorTemp}</td>
                  <td>{eachData.inputPower}</td>
                  <td>{eachData.ambientTemp}</td>
                  <td>{eachData.dcVoltage}</td>
                  <td>{eachData.dcVoltage}</td>
                  <td>{eachData.lifeTimeEnergy}</td>
                  <td>{eachData.waterTemp}</td>
                  <td>
                    <button className="view-btn">View</button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default WebPage;
