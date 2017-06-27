<div class="layer">
    <div> this is a <%= name %> layer </div>
    <% for(var i = 0, len = arr.length; i < len; i++) { %>
        <%= arr[i]  %>
    <% } %>

    css<div class="img-test">
    </div>
</div>

内联tpl<img src="${ require('../../assets/42.jpg') }" alt="">