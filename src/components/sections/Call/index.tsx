import Image from "next/image";
import style from "./style.module.scss"

const index = () => {
  return ( 
    <div>
      <div>
        <Image 
          src= "/img/call/call-img.png"
          alt=""
          width={1280}
          height={720}
        />
      </div>
    </div>
   );
}
 
export default index;