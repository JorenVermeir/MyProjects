<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<jsp:include page="header.jsp">
    <jsp:param value="streepjesOverview" name="pageTitle"/>
</jsp:include>
<table class="table">
    <tr>
        <th>userId</th>
        <th>date</th>
        <th>quantity</th>
    </tr>
    <c:forEach var="streepje" items="${ streepjes }">
        <tr>
            <td><c:out value='${streepje.userid}' /></td>
            <td><c:out value='${streepje.date}' /></td>
            <td><c:out value='${streepje.quantity}' /></td>
        </tr>
    </c:forEach>


    <caption><spring:message code="label.overview" /></caption>


</table>

<form action="/streepje/deletePersonStreepjes/${userId}.htm" method="POST">
    <input id="id" name="id" type="hidden" value="${userId}"/>

    <input type="submit" id="save" value="delete alle streepjes"/>
</form>
<jsp:include page="footer.jsp"></jsp:include>