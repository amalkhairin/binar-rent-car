class App {
  constructor() {
    this.form = document.querySelector("#search-form")
    this.tanggal = document.querySelector("#tanggal")
    this.waktu = document.querySelector("#waktu")
    this.driver = document.querySelector("#driver")
    this.penumpang = document.querySelector("#penumpang")
    this.searchButton = document.getElementById("#search-btn")

    this.carContainerElement = document.getElementById("cars-container");
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async init() {
    await this.load();
    // Register click listener

    // this.searchButton.onclick = this.run;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.filterCars().then((availableCars) => {
      this.carContainerElement.innerHTML = "";
      this.run(availableCars);
    });
  }

  run = (cars) => {
    if (cars) {
      Car.init(cars);
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.classList.add('col-md-4','p-3');
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  async filterCars() {
    const cars = await Binar.listCars();
    const tanggal = this.tanggal.value;
    const waktu = this.waktu.value;
    const penumpang = this.penumpang.value;

    const availableCars = cars.filter((car) => {
      const carTanggal = car.availableAt.split("T")[0];
      const carWaktu = new Date(car.availableAt).getHours();

      if (penumpang) {
        if (carTanggal === tanggal && carWaktu <= +waktu && car.available && penumpang <= car.capacity) {
          return true;
        }
      } else {
        if (carTanggal === tanggal && carWaktu <= +waktu && car.available) {
          return true;
        }
      }
      return false;
    });
    return availableCars;
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
