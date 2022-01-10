import PropTypes from "prop-types";
import RandomColorGenerator from './RandonColorGenerator'

import {
    StatisticSection,
    Title,
    StatList,
    Item,
    Label,
    Percentage,
  } from "./Statistics.styled";



export const Statistics = ({ title, stats }) => (
    <StatisticSection>
      {title && <Title>{title}</Title>}
  
      <StatList>
        {stats.map((stat) => (
          <Item key={stat.id} style={{ backgroundColor: RandomColorGenerator()}}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticSection>
  );

  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
  };