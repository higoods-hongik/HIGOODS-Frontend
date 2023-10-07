import styled from "@emotion/styled";
import { Table } from "antd";
import { palette } from "~/styles/palette";

const dataSource = [
  {
    key: "1",
    name: "박준희",
    id: "000000",
    date: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    id: 42,
    date: "10 Downing Street",
  },
];

const columns = [
  {
    title: "주문 번호",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "주문 일시",
    dataIndex: "date",
    key: "date",
  },
];

export const CustomTable = () => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      components={{
        header: { cell: StyledTh },
        table: StyledTable,
        body: { cell: StyledTd, row: StyledTr },
      }}
    />
  );
};

const StyledTh = styled.th`
  border-bottom: 1px solid ${palette.black} !important;
  padding: 0 !important;
  padding-bottom: 12px !important;
  background-color: transparent !important;
  &:not(:last-of-type) {
    border-radius: 0px !important;
  }
  &::before {
    width: 0px !important;
  }

  color: ${palette.grey4} !important;
`;

const StyledTd = styled.td`
  padding: 8px 0px 4px 0px !important;
  ${({ theme }) => theme.typo["body.1"]}

  color: #000 !important;

  border-bottom: 1px solid ${palette.grey2} !important;

  &::before {
    width: 8px !important;
    height: 1px !important;
    background-color: ${palette.grey2} !important;
    display: block;
    content: "";
    position: absolute;
    right: -8px;
    bottom: -1px;
  }
`;
const StyledTr = styled.tr``;

const StyledTable = styled.table`
  border-spacing: 8px 12px !important;
`;
