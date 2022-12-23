 #main #entry

-----------------
## H2
### H3
#### H4
##### H5

## Images

Single images with be centered:

![[NF39C8NW.png|600]]

### Image Grid Test

Sequential images that are not seperated by a space will be put into a tile grid.

![[sunset.png]]

![[car.png]]
![[overpass.png]]
![[parkbench.png]]

---------------------

![[draw_wizard.png]]
![[draw_space.png]]

![[draw_sunset.png]]


### Image Slideshow

>[!note]
>Currently there is no internal support for image carousels/slideshows. You will have to use pure **HTML**/**CSS** to get this to work.

Credit to [Wojciech Maj](https://stackoverflow.com/questions/30295085/how-can-i-make-an-image-carousel-with-only-css)

>[!tip]
>View in source mode to see **HTML** for adding/changing images!

<div
    class="CSS_slideshow"
    data-show-indicators="true"
    data-indicators-position="in"
    data-show-buttons="true"
    data-show-wrap-buttons="true"
    data-animation-style="slide"
    style="-moz-transition-duration: 0.3s; -webkit-transition-duration: 0.3s; transition-duration: 0.3s;"
>
    <div class="CSS_slideshow_wrapper">
        <input type="radio" name="css3slideshow" id="slide1" checked /><!--
     --><label for="slide1"><img src="https://placekitten.com/g/602/400" /></label><!--
     --><input type="radio" name="css3slideshow" id="slide2" /><!--
     --><label for="slide2"><img src="https://placekitten.com/g/605/400" /></label><!--
     --><input type="radio" name="css3slideshow" id="slide3" /><!--
     --><label for="slide3"><img src="https://placekitten.com/g/600/400" /></label><!--
     --><input type="radio" name="css3slideshow" id="slide4" /><!--
     --><label for="slide4"><img src="https://placekitten.com/g/603/400" /></label><!--
     --><input type="radio" name="css3slideshow" id="slide5" /><!--
     --><label for="slide5"><img src="https://placekitten.com/g/604/400" /></label> 
    </div>
</div>


## Quotes

> **General Block**
> This is a general quote block. Change the theming in CSS snippet `minimal_theme_mods`

> [!info]
> This is a generic callout

## Charts


```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }
```
