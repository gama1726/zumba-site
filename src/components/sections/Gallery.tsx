import { galleryPhotos } from "../../data/gallery";
import { zumbaVideos } from "../../data/videos";
import { SectionTitle } from "../ui/SectionTitle";
import styles from "./Gallery.module.css";

export function Gallery() {
  return (
    <section className={`section ${styles.section}`} id="gallery">
      <div className="container">
        <SectionTitle
          align="center"
          subtitle="Наш зал в Махачкале — место, где проходят групповые и персональные тренировки"
        >
          Студия
        </SectionTitle>

        <ul className={styles.grid}>
          {galleryPhotos.map((photo) => (
            <li key={photo.id} className={styles.item}>
              <img
                src={photo.src}
                alt={photo.alt}
                className={styles.image}
                loading="lazy"
              />
              <span className={styles.caption}>{photo.caption}</span>
            </li>
          ))}
        </ul>

        <div className={styles.videosBlock} id="zumba-videos">
          <h3 className={styles.videosTitle}>Zumba® Fitness в действии</h3>
          <p className={styles.videosSubtitle}>
            Короткие фрагменты с групповых занятий — почувствуйте атмосферу
            студии @gracia_dance
          </p>

          <ul className={styles.videoGrid}>
            {zumbaVideos.map((video) => (
              <li key={video.id} className={styles.videoItem}>
                <video
                  className={styles.video}
                  src={video.src}
                  title={video.title}
                  controls
                  playsInline
                  preload="metadata"
                />
                <span className={styles.videoCaption}>{video.caption}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
