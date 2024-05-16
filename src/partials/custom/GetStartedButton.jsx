import { GET_STARTED_URL } from "../../constants/urls";

const GetStartedButton = ({
  text = 'Get started',
  small = false,
  type = 'primary',
  footer = false,
}) => (
  <>
  <a
    href={GET_STARTED_URL}
    onClick={() => {
      window.goatcounter.count({
        path:  'click-get-started',
        title: 'Click Get Started button',
        event: true,
      });
    }}
    className={`${small ? 'btn-sm' : 'btn'} btn-${type} w-full`}
  >
    {text}
    <svg className={`w-3 h-3 fill-current shrink-0 ml-2`} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
    </svg>
  </a>
  { footer &&
    <small className="block text-center mt-2 text-gray-600">
      7-day free trial • no credit card required
    </small>
  }
  </>
);

export default GetStartedButton;