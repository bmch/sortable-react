import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import styled from "styled-components";
import * as actions from "./actions";
import { getSortedDevelopersCollection, sortSelector } from "./selectors";
import TableBody from "./shared/TableBody";
import SortLink from "./shared/SortLink";
import zipObject from "lodash/zipObject";

function App({ collection, setSortParams, clearSortParams, sortParams }) {
  return (
    <div>
      <h1>Sortable List with Redux and Reselect</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>
                <SortLink
                  label="First Name"
                  sortKey="firstName"
                  sort={sortParams}
                  onSort={(key, type) => setSortParams(key, type)}
                  onSortClear={() => clearSortParams()}
                />
              </th>
              <th>
                <SortLink
                  label="Last Name"
                  sortKey="lastName"
                  sort={sortParams}
                  onSort={(key, type) => setSortParams(key, type)}
                  onSortClear={() => clearSortParams()}
                />
              </th>
              <th className="text-right">
                <SortLink
                  label="Age"
                  sortKey="age"
                  sort={sortParams}
                  onSort={(key, type) => setSortParams(key, type)}
                  onSortClear={() => clearSortParams()}
                  textRight
                />
              </th>
              <th>
                <SortLink
                  label="Position"
                  sortKey="position"
                  sort={sortParams}
                  onSort={(key, type) => setSortParams(key, type)}
                  onSortClear={() => clearSortParams()}
                />
              </th>
              <th>
                <SortLink
                  label="Hired At"
                  sortKey="hiredAt"
                  type="date"
                  sort={sortParams}
                  onSort={(key, type) => setSortParams(key, type)}
                  onSortClear={() => clearSortParams()}
                />
              </th>
              <th className="text-right">
                <SortLink
                  label="Salary"
                  sortKey="salary"
                  type="float"
                  sort={setSortParams}
                  onSort={(key, type) => setSortParams(key, type)}
                  onSortClear={() => clearSortParams()}
                  textRight
                />
              </th>
            </tr>
          </thead>
          <TableBody collection={collection} />
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  collection: getSortedDevelopersCollection(state),
  sortParams: sortSelector(state)
});

const mapDispatchToProps = dispatch => ({
  setSortParams: bindActionCreators(actions.setSortParams, dispatch),
  clearSortParams: bindActionCreators(actions.clearSortParams, dispatch)
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(App);
