class Component {
  constructor() {
      if (new.target === Component) throw new Error("Tidak dapat melakukan inisiasi abstract class");
  }

  render() {
      throw new Error("must implement");
  }
}

class Car extends Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    super()
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class='card shadow'>
        <img src="${this.image}" class="card-img-top img-fluid" style="object-fit: cover; height: 200px" alt="${this.manufacture}">
        <div class="card-body">
            <span>${this.manufacture}/${this.type}</span>
            <h4>Rp ${this.rentPerDay}/Hari</h4>
            <p>${this.description}</p>
            <div class="d-flex flex-row">
                <div class="me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
                        <path d="M2.34106 4.13533C2.34098 3.44998 2.51479 2.77536 2.84686 2.17214C3.17893 1.56892 3.65884 1.05603 4.24344 0.679583C4.82804 0.30314 5.49898 0.0749577 6.19593 0.0155595C6.89287 -0.0438387 7.59396 0.0674099 8.23613 0.339299C8.8783 0.611189 9.44142 1.03519 9.87483 1.57317C10.3082 2.11115 10.5983 2.74624 10.7191 3.42131C10.8398 4.09638 10.7873 4.79026 10.5664 5.44054C10.3455 6.09082 9.96306 6.67711 9.45348 7.14667C10.4144 7.60346 11.2486 8.28051 11.8855 9.12041C12.5224 9.96031 12.9432 10.9383 13.1122 11.9714C13.1308 12.0864 13.1261 12.2038 13.0984 12.317C13.0707 12.4302 13.0205 12.5369 12.9507 12.6311C12.8808 12.7253 12.7928 12.805 12.6915 12.8659C12.5902 12.9267 12.4777 12.9674 12.3603 12.9856C12.243 13.0039 12.1231 12.9993 12.0076 12.9721C11.892 12.945 11.7831 12.8958 11.687 12.8274C11.5908 12.759 11.5094 12.6727 11.4473 12.5735C11.3852 12.4742 11.3437 12.364 11.325 12.249C11.1442 11.1389 10.5652 10.1283 9.69221 9.39872C8.81918 8.66914 7.70925 8.26836 6.56173 8.26836C5.4142 8.26836 4.30427 8.66914 3.43124 9.39872C2.55821 10.1283 1.97928 11.1389 1.79841 12.249C1.77972 12.364 1.7381 12.4742 1.67593 12.5734C1.61376 12.6726 1.53226 12.7589 1.43607 12.8272C1.33988 12.8956 1.23089 12.9447 1.11532 12.9718C0.99976 12.9988 0.879883 13.0033 0.762537 12.985C0.645191 12.9667 0.532675 12.926 0.431412 12.8651C0.33015 12.8042 0.242125 12.7243 0.172362 12.6301C0.102599 12.5358 0.0524659 12.4291 0.0248238 12.3159C-0.00281831 12.2026 -0.00742761 12.0852 0.011259 11.9702C0.180489 10.9375 0.601398 9.95995 1.2383 9.12047C1.87521 8.281 2.70934 7.60433 3.66997 7.14785C3.24992 6.76146 2.91526 6.29474 2.68668 5.77658C2.4581 5.25841 2.34047 4.69982 2.34106 4.13533ZM13.1942 2.36327C13.8948 2.36375 14.5803 2.56347 15.1673 2.93818C15.7543 3.3129 16.2177 3.8465 16.5012 4.47421C16.7846 5.10192 16.876 5.79675 16.7642 6.47435C16.6524 7.15195 16.3422 7.78318 15.8713 8.29142C16.6053 8.64842 17.2575 9.14797 17.7882 9.75969C18.3189 10.3714 18.7171 11.0825 18.9584 11.8497C19.0062 11.9987 19.0129 12.1573 18.9779 12.3097C18.9429 12.462 18.8673 12.6025 18.7589 12.7169C18.6506 12.8314 18.5132 12.9157 18.3608 12.9614C18.2084 13.007 18.0464 13.0123 17.8912 12.9768C17.7361 12.9414 17.5933 12.8667 17.4771 12.7601C17.3609 12.6535 17.2754 12.5188 17.2291 12.3695C17.013 11.6846 16.6192 11.0663 16.0861 10.5751C15.553 10.084 14.899 9.7367 14.1879 9.56731C13.9904 9.52061 13.8147 9.41013 13.6891 9.25369C13.5636 9.09724 13.4954 8.90393 13.4957 8.70491V8.28906C13.4956 8.1241 13.5425 7.96239 13.6311 7.82213C13.7197 7.68187 13.8466 7.56864 13.9973 7.49518C14.3629 7.31768 14.6565 7.02431 14.8304 6.66271C15.0043 6.30112 15.0483 5.89255 14.9553 5.50336C14.8623 5.11416 14.6377 4.76722 14.3179 4.51887C13.9982 4.27052 13.6022 4.13536 13.1942 4.13533C12.9543 4.13533 12.7243 4.04199 12.5547 3.87582C12.3851 3.70966 12.2898 3.48429 12.2898 3.2493C12.2898 3.01431 12.3851 2.78894 12.5547 2.62278C12.7243 2.45662 12.9543 2.36327 13.1942 2.36327ZM6.56173 1.77258C6.24055 1.76546 5.92115 1.82128 5.6223 1.93676C5.32344 2.05223 5.05115 2.22503 4.8214 2.44502C4.59165 2.66501 4.40908 2.92775 4.28441 3.21781C4.15974 3.50787 4.09547 3.81941 4.09539 4.13414C4.09531 4.44887 4.15942 4.76044 4.28394 5.05056C4.40847 5.34069 4.5909 5.60351 4.82054 5.82361C5.05017 6.04371 5.32238 6.21665 5.62118 6.33227C5.91997 6.44789 6.23934 6.50387 6.56052 6.49691C7.19068 6.48326 7.79034 6.22847 8.23114 5.78709C8.67194 5.34571 8.91885 4.75282 8.91901 4.13532C8.91916 3.51783 8.67256 2.92481 8.23199 2.48321C7.79141 2.04162 7.19188 1.78654 6.56173 1.77258Z" fill="black"/>
                    </svg>
                </div>
                <div>${this.capacity} Orang</div>
            </div>
            <div class="d-flex flex-row">
                <div class="me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M11.9378 6.92894C11.8318 6.81034 11.7733 6.65787 11.7733 6.5C11.7733 6.34213 11.8318 6.18966 11.9378 6.07106L12.7847 5.13519C12.878 5.03293 12.936 4.90427 12.9502 4.76767C12.9645 4.63106 12.9343 4.49352 12.8641 4.37479L11.5409 2.12609C11.4713 2.0075 11.3655 1.91349 11.2383 1.85748C11.1112 1.80146 10.9693 1.78629 10.8329 1.81414L9.5891 2.0611C9.43083 2.09323 9.26606 2.06734 9.12589 1.98831C8.98572 1.90929 8.87985 1.78261 8.82824 1.63216L8.42465 0.442824C8.38027 0.313738 8.29571 0.201619 8.18292 0.122315C8.07013 0.0430104 7.93482 0.000532145 7.79612 0.000883853H5.14966C5.00538 -0.00651347 4.8626 0.0326817 4.74314 0.112483C4.62367 0.192284 4.53407 0.308304 4.48804 0.442824L4.11753 1.63216C4.06593 1.78261 3.96005 1.90929 3.81988 1.98831C3.67971 2.06734 3.51495 2.09323 3.35668 2.0611L2.07976 1.81414C1.95045 1.79619 1.81862 1.81623 1.70088 1.87175C1.58314 1.92726 1.48477 2.01576 1.41814 2.12609L0.0949094 4.37479C0.0228992 4.4922 -0.00947893 4.62896 0.00240401 4.76553C0.014287 4.9021 0.0698225 5.03149 0.161071 5.13519L1.00132 6.07106C1.10739 6.18966 1.16589 6.34213 1.16589 6.5C1.16589 6.65787 1.10739 6.81034 1.00132 6.92894L0.161071 7.86481C0.0698225 7.96851 0.014287 8.0979 0.00240401 8.23447C-0.00947893 8.37104 0.0228992 8.50781 0.0949094 8.62521L1.41814 10.8739C1.48768 10.9925 1.59355 11.0865 1.72067 11.1425C1.84779 11.1985 1.98966 11.2137 2.12607 11.1859L3.36991 10.9389C3.52818 10.9068 3.69294 10.9327 3.83311 11.0117C3.97328 11.0907 4.07916 11.2174 4.13077 11.3678L4.53435 12.5572C4.58039 12.6917 4.66998 12.8077 4.78945 12.8875C4.90892 12.9673 5.05169 13.0065 5.19597 12.9991H7.84243C7.98114 12.9995 8.11644 12.957 8.22923 12.8777C8.34202 12.7984 8.42658 12.6863 8.47097 12.5572L8.87455 11.3678C8.92616 11.2174 9.03204 11.0907 9.17221 11.0117C9.31237 10.9327 9.47714 10.9068 9.63541 10.9389L10.8792 11.1859C11.0157 11.2137 11.1575 11.1985 11.2847 11.1425C11.4118 11.0865 11.5176 10.9925 11.5872 10.8739L12.9104 8.62521C12.9807 8.50648 13.0108 8.36894 12.9965 8.23234C12.9823 8.09573 12.9243 7.96707 12.831 7.86481L11.9378 6.92894ZM10.952 7.79982L11.4813 8.38474L10.6345 9.82755L9.85374 9.67157C9.37724 9.57589 8.88155 9.6554 8.46078 9.89501C8.04 10.1346 7.72344 10.5177 7.57117 10.9714L7.31976 11.6993H5.62602L5.38784 10.9584C5.23557 10.5047 4.919 10.1216 4.49823 9.88201C4.07746 9.6424 3.58177 9.56289 3.10526 9.65857L2.32456 9.81455L1.46445 8.37825L1.99375 7.79332C2.31923 7.43586 2.49918 6.97309 2.49918 6.4935C2.49918 6.01391 2.31923 5.55114 1.99375 5.19368L1.46445 4.60876L2.31132 3.17895L3.09203 3.33493C3.56854 3.43061 4.06423 3.3511 4.485 3.11149C4.90577 2.87188 5.22234 2.48885 5.3746 2.03511L5.62602 1.30071H7.31976L7.57117 2.04161C7.72344 2.49535 8.04 2.87838 8.46078 3.11799C8.88155 3.3576 9.37724 3.43711 9.85374 3.34143L10.6345 3.18545L11.4813 4.62825L10.952 5.21318C10.6302 5.56982 10.4525 6.02991 10.4525 6.5065C10.4525 6.98309 10.6302 7.44318 10.952 7.79982ZM6.47289 3.90035C5.94947 3.90035 5.4378 4.05282 5.00259 4.33847C4.56738 4.62413 4.22818 5.03014 4.02787 5.50516C3.82757 5.98018 3.77516 6.50288 3.87727 7.00717C3.97939 7.51145 4.23144 7.97466 4.60155 8.33823C4.97167 8.7018 5.44322 8.94939 5.95659 9.0497C6.46995 9.15 7.00207 9.09852 7.48564 8.90176C7.96922 8.705 8.38254 8.3718 8.67334 7.94429C8.96414 7.51678 9.11935 7.01416 9.11935 6.5C9.11935 5.81053 8.84053 5.1493 8.34422 4.66177C7.84791 4.17424 7.17477 3.90035 6.47289 3.90035ZM6.47289 7.79982C6.21118 7.79982 5.95534 7.72359 5.73774 7.58076C5.52013 7.43794 5.35053 7.23493 5.25038 6.99742C5.15023 6.75991 5.12402 6.49856 5.17508 6.24642C5.22614 5.99428 5.35216 5.76267 5.53722 5.58089C5.72228 5.3991 5.95806 5.27531 6.21474 5.22515C6.47142 5.175 6.73748 5.20074 6.97927 5.29912C7.22106 5.3975 7.42772 5.5641 7.57311 5.77786C7.71851 5.99161 7.79612 6.24292 7.79612 6.5C7.79612 6.84473 7.65671 7.17535 7.40855 7.41911C7.1604 7.66288 6.82383 7.79982 6.47289 7.79982Z" fill="black"/>
                    </svg>
                </div>
                <div>${this.transmission}</div>
            </div>
            <div class="d-flex flex-row">
                <div class="me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M11.7812 13H1.21875C0.544375 13 0 12.4556 0 11.7812V2.03125C0 1.35688 0.544375 0.8125 1.21875 0.8125H11.7812C12.4556 0.8125 13 1.35688 13 2.03125V11.7812C13 12.4556 12.4556 13 11.7812 13ZM1.21875 1.625C0.99125 1.625 0.8125 1.80375 0.8125 2.03125V11.7812C0.8125 12.0088 0.99125 12.1875 1.21875 12.1875H11.7812C12.0088 12.1875 12.1875 12.0088 12.1875 11.7812V2.03125C12.1875 1.80375 12.0088 1.625 11.7812 1.625H1.21875Z" fill="black"/>
                        <path d="M3.65625 3.25C3.42875 3.25 3.25 3.07125 3.25 2.84375V0.40625C3.25 0.17875 3.42875 0 3.65625 0C3.88375 0 4.0625 0.17875 4.0625 0.40625V2.84375C4.0625 3.07125 3.88375 3.25 3.65625 3.25ZM9.34375 3.25C9.11625 3.25 8.9375 3.07125 8.9375 2.84375V0.40625C8.9375 0.17875 9.11625 0 9.34375 0C9.57125 0 9.75 0.17875 9.75 0.40625V2.84375C9.75 3.07125 9.57125 3.25 9.34375 3.25ZM12.5938 4.875H0.40625C0.17875 4.875 0 4.69625 0 4.46875C0 4.24125 0.17875 4.0625 0.40625 4.0625H12.5938C12.8213 4.0625 13 4.24125 13 4.46875C13 4.69625 12.8213 4.875 12.5938 4.875Z" fill="black"/>
                    </svg>
                </div>
                <div>tahun ${this.year}</div>
            </div>
            <button class="mt-3 btn btn-full button--lime">Cari Mobil</button>
        </div>
      </div>
    `

    // return `
    //   <p>id: <b>${this.id}</b></p>
    //   <p>plate: <b>${this.plate}</b></p>
    //   <p>manufacture: <b>${this.manufacture}</b></p>
    //   <p>model: <b>${this.model}</b></p>
    //   <p>available at: <b>${this.availableAt}</b></p>
    //   <img src="${this.image}" alt="${this.manufacture}" width="64px">
    // `;
  }
}
