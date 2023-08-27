AFRAME.registerComponent("comics", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "comic_book_1",
          title: "ComicBook_1",
          url: "./Assets/ComicBook_1.jpg",
        },
        {
          id: "comic_book_2",
          title: "ComicBook_2",
          url: "./Assets/ComicBook_2.jpg",
        },
  
        {
          id: "comic_book_3",
          title: "ComicBook_3",
          url: "./Assets/ComicBook_3.jpg",
        },
        {
          id: "comic_book_4",
          title: "ComicBook_4",
          url: "./Assets/ComicBook_4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        
        // Thumbnail Element
        const thumbnail = this.createThumbnail(item)
        borderEl.appendChild(thumbnail)
        
        // Title Text Element
        const titleE1 = this.createTitle(position, item)
        borderEl.appendChild(titleE1)
        
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "ring",
          radiusInner:11,
          radiusOuter: 12,
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
          color: "#0077CC",
          opacity: 1,
        });
    
        //Add cursor-listener component to the ring border entity to change it's color 
        //On Cursor 'mouseenter' and 'mouseleave' entity
        entityEl.setAttribute("cursor-listener", {});
    
        return entityEl;
      },
      createThumbnail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width:20,
          height:28
        });
        entityEl.setAttribute("material", { src: item.url });
    
        return entityEl;
      },
      createTitle: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
    
        return entityEl;
    }
    
  });
  