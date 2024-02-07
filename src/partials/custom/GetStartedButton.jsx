const GetStartedButton = ({
  small = false,
  bgColor = undefined,
  txtColor = undefined,
}) => (
  <a
    href="https://github.com/astuto/astuto"
    data-goatcounter-click="get-started"
    className={`${small ? 'btn-sm' : 'btn'} btn-primary ${bgColor ? 'bg-'+bgColor : ''} ${txtColor ? 'text-'+txtColor : ''} w-full`}
  >
    Get started
    <svg className={`w-3 h-3 fill-current text-${txtColor ? txtColor : 'white'} shrink-0 ml-2`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
    </svg>
  </a>
);

export default GetStartedButton;