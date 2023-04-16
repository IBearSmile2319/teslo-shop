import { Slide } from "react-slideshow-image";
import styles from "./ProductSlideShow.module.css";
import "react-slideshow-image/dist/styles.css";
interface ProductSlideshowProps {
  iamges: string[];
}

const ProductSlideshow = ({ iamges }: ProductSlideshowProps) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {iamges.map((image, index) => {
        const url = `/products/${image}`;
        return (
          <div key={image} className={styles["each-slide"]}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};

export default ProductSlideshow;
