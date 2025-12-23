
      
      const inputArea = document.getElementById('input-area');
      const inputBox = document.querySelector(".input-box")
      const searchIcon = document.querySelector(".search-icon");
      const btnCancel = document.querySelector(".btn-cancel");

      
      const category = document.querySelector(".category");
      const categoryLinks = document.querySelectorAll(".category li");
      const container = document.querySelector(".container");
      const sectionWidth = container.offsetWidth;




      // function scroll
      function goToSection(id) {
        const target = document.getElementById(id);

        target.scrollIntoView({
            behavior: "smooth"
        });
      }

      container.addEventListener('scroll', ()=>{

         const index = Math.round(container.scrollLeft / sectionWidth);
         
         const activeLink = categoryLinks[index];

         const rect = activeLink.getBoundingClientRect();
         const parentRect = category.getBoundingClientRect();

         const left = rect.left - parentRect.left;
         const width = rect.width;

         category.style.setProperty("--afterWidth", `${width}px`);
         category.style.setProperty("--afterLeft", `${left}px`);
      })
      // end function scroll

      // search section on side bar
      // hide icon search when focus input area and show when blur
      inputArea.addEventListener('blur', ()=>{

        searchIcon.classList.toggle("active");
        btnCancel.classList.remove("active")
        // menggembalikan placeholder saat blur
        inputArea.style.paddingLeft = "30px";
        inputArea.value = "";
      });

      inputArea.addEventListener('focus', ()=>{
        searchIcon.classList.toggle("active");
        // menggeser placeholder ke kiri saat focus
        inputArea.style.paddingLeft = "10px";
      });

      // show btn cancel when user type in input area
      inputArea.addEventListener("input",()=>{
        if (inputArea.value.trim() !== "") {
          btnCancel.classList.add("active");
        }else{
          btnCancel.classList.remove("active");
        }
      })

      // clear input when btn cancel is ckliked
      btnCancel.addEventListener("mousedown", (e) => {
        e.preventDefault();
        inputArea.value = "";
        btnCancel.classList.toggle("active");
      })

      // shiw search menu
      const sideMenu = document.querySelector(".side-menu")

      function showSearchMenu() {
        const search = document.querySelector(".search")

        if (sideMenu && search) {
          sideMenu.style.display = "grid";
          search.style.display = "grid";
        }
      }


      // end search section on side bar