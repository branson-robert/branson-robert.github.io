  change.onclick = function() { 

        this.style.fontSize='36px';
        this.style.color='red';
        this.style.backgroundColor = 'yellow';
    this.style.height='300px';

        this.style.borderRadius='50%';
        this.style.WebkitTransform='rotate(5760deg)'; 
        this.style.transform='rotate(5760deg)';

        var myDiv = this;
        setTimeout(function() {
                myDiv.style = '';
        }, 5500);

        setTimeout(function() {
                myDiv.style.transform= 'scale(0.001)';
        }, 11000);

        setTimeout(function() {
                myDiv.style.transform= 'scale(1.0)';
        }, 14000);
}


digitList.onclick = function() {
        this.style.fontSize='36px';
        this.style.color='#000';
        this.style.backgroundColor = '#c0c0c0';


        var myDiv = this;
        setTimeout(function() {
                myDiv.style = '';
        }, 6000);
  digitList.classList.add('move');
};