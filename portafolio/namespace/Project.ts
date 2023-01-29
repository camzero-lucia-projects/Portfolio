type StaticImageData = {
  src: string
  height: number
  width: number
  blurDataURL?: string
}

namespace Project {
  export interface Description {
    nameProject?: string
    textIndex?: string
    type?: string
    lenguages?: string
    textBackground?: string
  }
}

export default Project
