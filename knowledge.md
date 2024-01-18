Optimize

- SEO bằng cách viết meta data cho từng page
- \_app.js, \_document.js config meta data
- Optimize image (dùng Image của next)

- Rendering
  +SSG -> setStaticProps (nếu có dynamic phải có getStaticPaths để next detect xem cái nào nên generating trước)
  +ISR -> getStaticProps with invalidate timing
  +SSR -> getServerSideProps
