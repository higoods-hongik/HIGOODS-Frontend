import styled from "@emotion/styled";
import { Table } from "antd";
import { palette } from "~/styles/palette";
import { renderPaginationItem } from "./renderPaginationItem";

const dataSource = [
  {
    key: "1",
    name: "asdadfs",
    id: "000000",
    date: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    id: 42,
    date: "10 Downing Street",
  },
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
    <TableWrapper>
      <Table
        dataSource={dataSource}
        columns={columns}
        components={{
          header: { cell: StyledTh },
          table: StyledTable,
          body: { cell: StyledTd, row: StyledTr },
        }}
        pagination={{
          position: ["bottomCenter"],
          itemRender: renderPaginationItem,
        }}
      />
    </TableWrapper>
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

const TableWrapper = styled.div`
  ${({ theme }) => theme.typo["label.2"]}
  color : ${({ theme }) => theme.palette.grey4};
  .ant-pagination {
    height: 20px !important;

    & a {
      line-height: 20px !important;
      padding: 0px !important;
    }
  }
  .ant-pagination-prev {
    height: 20px !important;
    min-height: 20px !important;
    min-width: 16px !important;
    width: 16px !important;
    padding-top: 2px !important;
    margin-inline-end: 14px !important;
    & > a {
      color: ${({ theme }) => theme.palette.grey4};
    }
  }
  .ant-pagination-next {
    height: 20px !important;
    min-height: 20px !important;
    min-width: 16px !important;
    width: 16px !important;
    padding-top: 2px !important;
    & > a {
      color: ${({ theme }) => theme.palette.grey4};
    }
  }
  .ant-pagination-item {
    height: 20px !important;
    width: 16px !important;
    min-width: 16px !important;
    border: none !important;
    border-bottom: 1px solid transparent !important;
    margin-inline-end: 14px !important;
    & > a {
      color: ${({ theme }) => theme.palette.grey4} !important;
    }
  }
  .ant-pagination-item-active {
    border: none !important;
    border-bottom: 1px solid ${({ theme }) => theme.palette.black} !important;
    border-radius: 0px;
    & > a {
      color: ${({ theme }) => theme.palette.black} !important;
    }
  }
`;
