import React, { Component } from "react";
// import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
// import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
// import { auth, googleAuthProvider, db, storage } from '../config/firebase'
// import { ref, uploadBytes } from 'firebase/storage'

type StateType = {};
export type HomeCarouselType = {
  dots: boolean;
  customPaging: (i: number) => JSX.Element;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  className: string;
  autoplay: boolean;
  autoplaySpeed: number;
  cssEase: string;
  pauseOnHover: boolean;
  responsive: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }[];
};
export default class HomeController extends Component<{}, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  settings = {
    dots: true,
    customPaging: (i: number) => <div className="slick-dot"></div>,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    className: "sliderContainer",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
}

// studentDB = collection(db, "students")

// async getData() {
//   try {
//     const data = await getDocs(this.studentDB)
//     this.setState({
//       studentData: data.docs.map((doc) => ({
//         id: doc.id,
//         name: doc.data().name,
//         roll: doc.data().roll,
//         player: doc.data().player
//       }))
//     })
//   }catch(error) {
//     console.log(error)
//   }
// }
// async createData() {
//   try {
//     await addDoc(this.studentDB, {
//       name: this.state.name,
//       roll: this.state.roll,
//       player: this.state.player
//     })
//   }catch(error) {
//     console.log(error)
//   }
// }
// async deleteData(id: string) {
//   try {
//     const student = doc(db, "students", id)
//     await deleteDoc(student)
//   }catch(error) {
//     console.log(error)
//   }
// }
// prefillData(student:StudentType) {
//   this.setState({
//     name: student.name,
//     roll: student.roll,
//     player: student.player,
//     id: student.id
//   }, () => console.log("Hello",this.state.id))
// }
// async updateData() {
//   try {
//     const student = doc(db, "students", this.state.id)
//     await updateDoc(student, {
//       name: this.state.name,
//       roll: this.state.roll,
//       player: this.state.player
//     })
//   }catch(error) {
//     console.log(error)
//   }
// }
// async uploadFile() {
//   try{
//     if(!this.state.file) return;
//     const folderRef = ref(storage, `images/${this.state.file.name}`)
//     await uploadBytes(folderRef, this.state.file)
//     alert("File uploaded")
//   }catch(error) {
//     console.log("File error",error)
//   }
// }
// async loginHandler(){
//  try{
//   const {email, password} = this.state
//   await createUserWithEmailAndPassword(auth,email, password)
//   alert("Login successfully")
//  }catch(error) {
//   console.log(error)
//  }
// }
// async logoutHandler() {
//   try {
//     await signOut(auth)
//     alert("Logout")
//   }catch(error) {
//     console.log(error)
//   }
// }
// async loginWithGoogle() {
//   try {
//     await signInWithPopup(auth, googleAuthProvider)
//   }catch(error) {
//     console.log(error)
//   }
// }
// componentDidMount(): void {
// onAuthStateChanged(auth, (currentuser) => {
//   this.setState({userEmail: currentuser?.email})
// })
// this.getData()
// }
