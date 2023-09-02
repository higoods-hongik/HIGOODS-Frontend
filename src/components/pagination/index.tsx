import styled from "@emotion/styled";
import { Pagination as BasePagination } from "antd";

export interface PaginationProps {
  current: number;
  total: number;
  size: number;
  onChange?: (value: number) => void;
}

const Pagination = ({ current, total, size, onChange }: PaginationProps) => {
  return (
    <StyleWrapper>
      <BasePagination
        current={current}
        total={total}
        onChange={onChange}
        pageSize={size}
      />
    </StyleWrapper>
  );
};

export default Pagination;

const StyleWrapper = styled.div``;
