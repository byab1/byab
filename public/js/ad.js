$('#add-image').click(function(){
            //Je récupère le Num des futurs champs que je dois créer
            const index =  +$('#widgets-counter').val();
            //Je récupère le prototype des entrées
            const tmpl =  $('#ad_images').data('prototype').replace(/__name__/g, index);

            // j'insère ce code au sein de la div
            $('#ad_images').append(tmpl);

            $('#widgets-counter').val(index + 1);

            //Je gère le bouton de suppression
            handleDeleteButtons();

        });

        function handleDeleteButtons(){
            $('button[data-action="delete"]').click(function() {
                const target = this.dataset.target;
                $(target).remove();
            })
        }

        function updateCounter(){
            const count = +$('#ad_images div.form-group').length;

            $('#widgets-counter').val(count);
        }
        updateCounter();
        handleDeleteButtons();