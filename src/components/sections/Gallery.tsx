import { galleryPhotos } from "../../data/gallery";
import { studioVideos, videoGroups } from "../../data/videos";
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

        <div className={styles.videosBlock} id="studio-videos">
          <h3 className={styles.videosTitle}>Видео с занятий</h3>
          <p className={styles.videosSubtitle}>
            Фрагменты реальных тренировок в студии @gracia_dance
          </p>

          {videoGroups.map((group) => {
            const videos = studioVideos.filter((v) => v.category === group.id);
            if (videos.length === 0) return null;

            return (
              <div
                key={group.id}
                className={styles.videoGroup}
                id={group.anchor}
              >
                <h4 className={styles.videoGroupTitle}>{group.title}</h4>
                <ul className={styles.videoGrid}>
                  {videos.map((video) => (
                    <li key={video.id} className={styles.videoItem}>
                      <video
                        className={styles.video}
                        src={video.src}
                        title={video.title}
                        controls
                        playsInline
                        preload="metadata"
                      />
                      <span className={styles.videoCaption}>
                        {video.caption}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
