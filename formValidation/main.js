function Validator(options)
{

    //Hàm lấy phần tử cha của errormessage
    function getParent(element, selector)
    {
        while(element.parentElement)
        {
            if(element.parentElement.matches(selector))
            {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    };
    var selectorRules = {};
    //Hàm thực hiện validate
    function validate(inputElement,rule)
    {
        var message = getParent(inputElement,options.formGroupSelector).querySelector(options.erorElement);
        var errorMessage;

        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]

        //Lặp qua từng rule và kiểm tra
        for(var i = 0; i < rules.length; i++)
        {
            errorMessage =  rules[i](inputElement.value);
            if(errorMessage) break;
        }
        if (errorMessage) {
            message.innerText = errorMessage;
            getParent(inputElement,options.formGroupSelector).classList.add('invalid');
        }
        else {
            message.innerText = '';
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid');
        }
        return !errorMessage;
    };

    //Lấy element của form
    var form = document.querySelector(options.form);

    //Kiểm tra form có tồn tại
    if(form)
    {
        //Xử lí khi bấm submit
        form.onsubmit = function(e)
        {
            e.preventDefault();
            var formValid = true;

            //Lặp qua từng rule và validate
            options.rules.forEach(function (rule)
            {
                var inputElement = form.querySelector(rule.selector);
                var isValid = validate(inputElement,rule); 
                if(!isValid)
                {
                    formValid = false;
                }
            });

            if(formValid)
            {
                //Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function')
                {
                    //Lấy các thẻ có field name 
                    var enableInputs = form.querySelectorAll('[name]');
                    var formValue = Array.from(enableInputs).reduce(function(value, input)
                    {
                        [value[input.name] = input.value];
                        return  value;
                    },{});

                    options.onSubmit(formValue);
                }
                //Trường hợp submit mặc định html
                else
                {
                    form.submit();
                }
            }
            
        };
        //Lấy các phần tử select 
       options.rules.forEach(function (rule)
       {
        //Lưu lại các rule trong input
        if(Array.isArray(selectorRules[rule.selector]))
        {
            selectorRules[rule.selector].push(rule.test);
        }
        else
        {
            selectorRules[rule.selector] = [rule.test];
        }
        var inputElement = form.querySelector(rule.selector);

        if(inputElement)
        {
            //Xử lí blur khỏi input
            inputElement.onblur = function()
            {
                validate(inputElement,rule);
            }
            //Xử lí khi người dùng input
            inputElement.oninput = function()
            {
                var message = inputElement.parentElement.querySelector(options.erorElement)
                message.innerText = '';
                inputElement.parentElement.classList.remove('invalid');
            }
            
        }
       });
    }
}

Validator.isRequired = function(selector)
{
    return {
        selector: selector,
        test: function(value)
        {
            return value.trim() ? undefined : 'Vui lòng nhập trường này!'
        }
    };

}

Validator.isEmail = function(selector)
{
    return {
        selector: selector,
        test: function(value)
        {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập đúng email!'
        }
    };
}

Validator.isPassword = function(selector, min)
{
    return{
        selector: selector,
        test: function(value)
        {
            return value >= min ? undefined : 'Vui lòng nhập tối thiểu 6 kí tự!'
        }
    }
}

Validator.isConfirm = function(selector,passConfirm)
{
    return{
        selector: selector,
        test: function(value)
        {
            return value === passConfirm() ? undefined : 'Mật khẩu nhập lại không chính xác!'
        }
    };
}