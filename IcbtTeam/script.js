const slideData = [
{
  index: 0,
  headline: '阿華田拿鐵',
  line:'圓潤飽滿、滑溜Q彈的「黑',
  src: 'img/drinks/阿華田拿鐵.png' },
  

{
  index: 1,
  headline: '波霸奶茶 圓潤飽滿、滑溜Q彈的「黑糖珍珠」，沖入帶著微微紅茶香的香濃奶茶，給予意想不到的新風味。',
 
  src: 'img/drinks/珍珠奶茶.png' },

{
  index: 2,
  headline: '紅茶拿鐵 特選「阿薩姆紅茶」為湯底與香醇濃郁奶香融合，綿密滑順，協調相融，雙層滋味。',
 
  src: 'img/drinks/紅茶拿鐵.png' },

];




// =========================
// Slide
// =========================

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty('--x', 0);
    this.slide.current.style.setProperty('--y', 0);
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  imageLoaded(event) {
    event.target.style.opacity = 0.7;
  }

  render() {
    const { src, button, headline, index } = this.props.slide;
    const current = this.props.current;
    let classNames = 'slide';

    if (current === index) classNames += ' slide--current';else
    if (current - 1 === index) classNames += ' slide--previous';else
    if (current + 1 === index) classNames += ' slide--next';

    return (
      React.createElement("li", {
        ref: this.slide,
        className: classNames,
        onClick: this.handleSlideClick,
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave },

      React.createElement("div", { className: "slide__image-wrapper" },
      React.createElement("img", {
        className: "slide__image",
        alt: headline,
        src: src,
        onLoad: this.imageLoaded })),



      React.createElement("article", { className: "slide__content" },
      React.createElement("h2", { className: "slide__headline" }, headline),
      React.createElement("button", { className: "slide__action btn" }, button))));



  }}



// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    React.createElement("button", { className: `btn btn--${type}`, title: title, onClick: handleClick },
    React.createElement("svg", { className: "icon", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }))));



};


// =========================
// Slider
// =========================

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 1 };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ?
      this.props.slides.length - 1 :
      previous });

  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ?
      0 :
      next });

  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index });

    }
  }

  render() {
    const { current, direction } = this.state;
    const { slides, heading } = this.props;
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`;
    const wrapperTransform = {
      'transform': `translateX(-${current * (100 / slides.length)}%)` };


    return (
      React.createElement("div", { className: "slider", "aria-labelledby": headingId },
      React.createElement("ul", { className: "slider__wrapper", style: wrapperTransform },
      React.createElement("h3", { id: headingId, class: "visuallyhidden" }, heading),

      slides.map(slide => {
        return (
          React.createElement(Slide, {
            key: slide.index,
            slide: slide,
            current: current,
            handleSlideClick: this.handleSlideClick }));


      })),


      React.createElement("div", { className: "slider__controls" },
      React.createElement(SliderControl, {
        type: "previous",
        title: "Go to previous slide",
        handleClick: this.handlePreviousClick }),


      React.createElement(SliderControl, {
        type: "next",
        title: "Go to next slide",
        handleClick: this.handleNextClick }))));




  }}



ReactDOM.render(React.createElement(Slider, { heading: "Example Slider", slides: slideData }), document.getElementById('app'));