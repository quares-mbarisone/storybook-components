import './MyLabel.css';

interface Props {
  
  /**
  * Text to display
  */
  label: string;
  
  /**
  * Label size
  */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  
  /**
  * Capitalize all letters in Label
  */
  allCaps?: boolean;

  /**
  * Label text color
  */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
  * Label text color - but with a color picker!
  */
  fontColor?: string

  /**
  * Label background color with color picker!
  */
  backgroundColor?: string
}

export const MyLabel = ({ 
  label, 
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
  backgroundColor = 'transparent'
} : Props ) => {

  return (
    <span 
      className={`${ size } ${ color } label`} 
      style={{ color: fontColor, backgroundColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )

}
