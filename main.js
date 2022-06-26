  /// <reference path="./jq/typings/globals/jquery/index.d.ts" />



  $(document).ready(function() {


      //#region ................1 - loading screen
      //   slideUp('slow')  or slideUp(1000)
      //   error
      $('.loading').slideUp(2000, function() {

              $('.loading').switchClass('d-flex', 'd-none', function() {
                  $('body').removeClass('overflow-hidden')
              })
          })
          //#endregion

      //#region -- -- -- -- -- --local storage
      let tasks;
      (function() {
          if (localStorage.getItem('localdata') == null) {
              tasks = []
          } else {
              tasks = JSON.parse(localStorage.getItem('localdata'))
              display()
          }
      })()
      //#endregion

      //-------#region crud 

      // ----------------------getdata()
      function getdata() {
          let data = {
              taskinf: $('.taskinpt').val(),
              taskid: Math.random() * 20000
          }
          return data
      }

      //   ----------------  btns
      $('.btnadd').click(function() {
          add()
      })


      // ------------------  add()
      function add() {
          tasks.unshift(getdata())


          localStorage.setItem('localdata', JSON.stringify(tasks))
          display()
          alert(getdata().taskid)

      }
      //  -----------------   display ()


      function display() {
          let divs = ''
          for (let i = 0; i < tasks.length; i++) {
              divs += `
              <div class="row mb-2  ">

              <div class="col-md-8">
                  <p class="form-control h-100 rowvalue" placeholder="Add Task--------">${tasks[i].taskinf}</p>
              </div>
              <div class="col-md-2">
                  <button class="btn btn-outline-info w-100 btnedit">Edit</button>
              </div>
              <div class="col-md-2">
                  <button class="btn btn-outline-danger w-100 btndelet">Delete</button>
                  <span class="d-none">${i}</span>
              </div>

          </div>

              `
          }
          $('.alltasks').html(divs)
      }


      //  -----------------   edit ()  

      $('.btnedit').click(function() {

          })
          //  -----------------   delete ()

      $('.btndelet').click(function() {
              let selectedindex = $(this).siblings('span').text()
              console.log(tasks[selectedindex]);

              tasks.splice(selectedindex, 1)
              localStorage.setItem('localdata', JSON.stringify(tasks))
              display()
          })
          //#endregion


  })