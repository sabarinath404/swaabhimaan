// readData.js
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const readData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    return users;
  } catch (error) {
    console.error("Error reading data:", error);
  }
};

export default readData;
