<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<jsp:include page="header.jsp">
    <jsp:param name="title" value="User Overview" />
    <jsp:param name="pageName" value="StreepjesApp | person overview" />
</jsp:include>

<p>weer:${weer}</p>
<table class="table">
    <tr>
        <th>Totem</th>
        <th><spring:message code="label.firstname" /></th>
        <th><spring:message code="label.lastname" /></th>
        <th><spring:message code="label.stripe" /></th>
        <th><spring:message code="label.stripeOverview" /></th>
        <th></th>
    </tr>
    <c:forEach var="person" items="${ persons }">

            <tr>
                <td><c:out value='${person.totem}' /></td>
                <td><c:out value='${person.firstName}' /></td>
                <td><c:out value='${person.lastName}' /></td>
                <td><a href="streepje/${person.id}.htm"><spring:message code="label.stripe" /></a></td>
                <td><a href="streepje/overview/${person.id}.htm"><spring:message code="label.stripeOverview" /></a></td>
                <td><a href="person/${person.id}.htm"><spring:message code="label.edit" /></a></td>
                <td>
                    <form method="post" action="${pageContext.request.contextPath}/person/delete/${person.id}.htm">
                        <input type="hidden" value="markup" id="markup" name="markup">
                        <input type="submit" value="<spring:message code="label.delete"/>">
                    </form>

                </td>


            </tr>
    </c:forEach>

    <caption><spring:message code="label.overview" /></caption>
</table>



<jsp:include page="footer.jsp"></jsp:include>