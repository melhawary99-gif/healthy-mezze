ALTER TABLE reviews
ADD COLUMN google_subject TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS
idx_reviews_google_subject_drink
ON reviews(google_subject, drink_slug)
WHERE google_subject IS NOT NULL;
