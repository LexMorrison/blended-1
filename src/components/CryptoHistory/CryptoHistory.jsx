import PropTypes from 'prop-types';
import { formatDateToNow } from 'helpers/formatDateToNow';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ items }) => {
  return (
    <>
      <BaseTable>
        <THead>
          <tr>
            <Th>№</Th>
            <Th>PRICE</Th>
            <Th>AMOUNT</Th>
            <Th>DATE</Th>
          </tr>
        </THead>

        <tbody>
          {items &&
            items.map(({ id, price, amount, date }, index) => {
              return (
                <Tr key={id}>
                  <Td>{index}</Td>
                  <Td>{price}</Td>
                  <Td>{amount}</Td>
                  <Td>{formatDateToNow(date)}</Td>
                </Tr>
              );
            })}
        </tbody>
      </BaseTable>
    </>
  );
};

CryptoHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
};
