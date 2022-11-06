import React from "react";

const html = 
`/* Primary */
<button class='btn btn-primary'>
    Button
</button>

/* Secondary */
<button class='btn btn-secondary'>
    Button
</button>

/* Primary Outline */
<button class='btn btn-primary btn-outline-primary'>
    Outline Button
</button>

/* Primary Rounded */
<button class='btn btn-primary btn-primary-outline btn-round'>
    Round Button
</button>

/* Loading */
<button class="btn btn-primary" id="loading-button" onClick={toggleSpinner}>
    <span class="btn-text">Loading button</span>
</button>

/* Floating */
<button className="btn-floating">
    <i className="fas fa-plus"></i>
</button>`


const css = 
`:root {
    --primary: #4ADCDC;
    --primary-light: #B3F0F1;
    --primary-dark: #4DC5C5;
  }

.btn {
    position: relative;
    font-family: Lato;
    color: white;
    font-size: 1.6rem;
    height: 34px;
    padding: 0 17px;
    margin-bottom: 10px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid transparent;
    line-height: inherit;
    transition: color .15s ease-in-out, 
        background-color .15s ease-in-out, 
        border-color .15s ease-in-out,
        box-shadow .15s ease-in-out;
}

/* Primary */
.btn-primary {
    background-color: var(--primary);
}

.btn-primary:focus {
    box-shadow:  0 0 0 .3rem var(--primary-light);
    background-color:  var(--primary-dark);
}

.btn-primary:hover {
    background-color: var(--primary-dark);
}

.btn-primary:disabled {
    background-color: var(--primary-light);
    cursor: auto;
}

/* Primary Outline */
.btn-outline-primary {
    background-color: transparent;
    color: var(--primary);
    border: 1px solid var(--primary);
}

.btn-outline-primary:focus {
    box-shadow:  0 0 0 .3rem var(--primary-light);
    background-color: var(--primary);
    color: #fff;
}

.btn-outline-primary:hover {
    background-color:  var(--primary);
    color: #fff;
}

.btn-outline-primary:disabled {
    background-color: var(--primary-light);
    cursor: auto;
    color: #fff;
}

&--small {
    height: 30px;
    font-size: 14px;
    padding: 0 15px;
}

&--big {
    height: 52px;
    padding: 0 32px;
}

&--block {
    width: 100%;
}

/* Rounded */
.btn.btn-round {
    border-radius: 2.8rem;
}

/* Loading */
.btn-loading .btn-text {
    visibility: hidden;
    opacity: 0;
}

.btn-loading::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border: 3px solid transparent;
    border-top-color: #fff;
    border-radius: 50%;
    animation: button-loading-spinner .8s ease infinite;
}

@keyframes button-loading-spinner {
    from {
        transform: rotate(0turn);
    }
    to {
        transform: rotate(1turn);
    }
}


/* Floating */
.btn-floating {
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    width: 6rem;
    height: 6rem;
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #fff;
    font-size: 2.5rem;
    box-shadow: 1px 2px 7px rgba(0, 0, 0, .25);
    transition: background .25s;
    z-index: 100;
}

.btn-floating:active,
.btn-floating:hover {
    background: var(--primary-dark);
}

@media only screen and (max-width: 1200px) { 
    .btn-floating {
        right: 2rem;
        bottom: 8rem;
    }
}`

const sass = 
`$primary: #4ADCDC;

.btn {
    position: relative;
    font-family: Lato;
    color: white;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    padding: 6px 12px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid transparent;
    line-height: inherit;
    transition: color .15s ease-in-out, 
        background-color .15s ease-in-out, 
        border-color .15s ease-in-out,
        box-shadow .15s ease-in-out;

    &.btn-round {
        border-radius: 2.8rem;
    }

    &-primary {
        background-color: $primary;

        &:focus {
            box-shadow: 0 0 0 .3rem mix(white, $primary, 55%);
            background-color:  mix(black, $primary, 10%);
        }

        &:hover {
            background-color: mix(black, $primary, 10%);
        }

        &:disabled {
            background-color: mix(white, $primary, 45%);
            cursor: auto;
        }

        &-outline {
            background-color: transparent;
            color: $primary;
            border: 1px solid $primary;

            &:focus {
                box-shadow:  0 0 0 .3rem mix(white, $primary, 55%);
                background-color: $primary;
                color: #fff;
            }

            &:hover {
                background-color:  $primary;
                color: #fff; 
            }

            &:disabled {
                background-color: mix(white, $primary, 45%);
                cursor: auto;
                color: #fff;
            }
        }
    }

    &-loading {
        .btn-text {
            visibility: hidden;
            opacity: 0;
        }

        &::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            border: 3px solid transparent;
            border-top-color: #fff;
            border-radius: 50%;
            animation: button-loading-spinner .8s ease infinite;
        }

        @keyframes button-loading-spinner {
            from {
                transform: rotate(0turn);
            }
            to {
                transform: rotate(1turn);
            }
        }
    }

    &-floating {
        position: fixed;
        right: 3rem;
        bottom: 3rem;
        width: 6rem;
        height: 6rem;
        background: $primary;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #fff;
        font-size: 2.5rem;
        box-shadow: 1px 2px 7px rgba(0, 0, 0, .25);
        transition: background .25s;
        z-index: $100;

        &:active, &:hover {
            background: mix(black, $primary, 10%);
        }
    }
}`

const js = 
`const toggleSpinner = () => {
    document.getElementById('loading-button').classList.toggle('btn-loading');
}`


export default [
    { title: 'HTML', lang: 'html', code: html},
    { title: 'Javascript', lang: 'javascript', code: js},
    { title: 'SASS', lang: 'css', code: sass},
    { title: 'CSS', lang: 'css', code: css},
]